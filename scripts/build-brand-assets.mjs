/**
 * Rasterise the brand to every size the site and the lead emails load.
 *
 *   node scripts/build-brand-assets.mjs
 *
 * The two SVGs are the source of truth:
 *
 *   app/icon.svg          the square mark
 *   public/brand/logo.svg the horizontal lockup
 *
 * Everything else — the favicon, the Apple touch icon, the PWA icon, the
 * header logo and the email logo — is generated from them here. The point is
 * that the logo stops being a binary nobody can edit: change a vector, run
 * this, and every size follows.
 *
 * ── On the email logo ─────────────────────────────────────────────────────
 * It is the only asset flattened onto a white background. The others are
 * transparent because the site always gives the logo its own light panel,
 * but an email client composes against whatever the reader's theme is, and
 * navy type on a transparent background disappears in dark mode.
 *
 * ── On the favicon ────────────────────────────────────────────────────────
 * Written by hand because there is no ICO encoder here. It carries 16, 32
 * and 48 pixel frames: Google requires a favicon whose side is a multiple of
 * 48 to show one in search results at all, and the browser tab wants the
 * small sizes. PNG-compressed frames inside an ICO container are valid and
 * universally supported.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const markSvg = readFileSync(join(root, "app", "icon.svg"));
const lockupSvg = readFileSync(join(root, "public", "brand", "logo.svg"));

/** density keeps text crisp: librsvg rasterises at 72dpi unless told otherwise. */
const render = (svg, opts) => sharp(svg, { density: 384 }).resize(opts).png();

async function ico(sizes) {
  const frames = [];
  for (const size of sizes) {
    frames.push({
      size,
      png: await render(markSvg, { width: size, height: size }).toBuffer(),
    });
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = icon
  header.writeUInt16LE(frames.length, 4);

  const directory = Buffer.alloc(16 * frames.length);
  let offset = header.length + directory.length;
  frames.forEach((frame, i) => {
    const at = i * 16;
    directory.writeUInt8(frame.size >= 256 ? 0 : frame.size, at);
    directory.writeUInt8(frame.size >= 256 ? 0 : frame.size, at + 1);
    directory.writeUInt8(0, at + 2); // palette size, 0 for truecolour
    directory.writeUInt8(0, at + 3); // reserved
    directory.writeUInt16LE(1, at + 4); // colour planes
    directory.writeUInt16LE(32, at + 6); // bits per pixel
    directory.writeUInt32LE(frame.png.length, at + 8);
    directory.writeUInt32LE(offset, at + 12);
    offset += frame.png.length;
  });

  return Buffer.concat([header, directory, ...frames.map((f) => f.png)]);
}

const out = (...p) => join(root, ...p);

const jobs = [
  ["app/apple-icon.png", () => render(markSvg, { width: 180, height: 180 }).toFile(out("app", "apple-icon.png"))],
  ["public/icon-512.png", () => render(markSvg, { width: 512, height: 512 }).toFile(out("public", "icon-512.png"))],
  ["public/brand/logo.png", () => render(lockupSvg, { height: 210 }).toFile(out("public", "brand", "logo.png"))],
  [
    "public/brand/logo-email.png",
    () =>
      sharp(lockupSvg, { density: 384 })
        .resize({ height: 228 })
        .flatten({ background: "#ffffff" })
        .png()
        .toFile(out("public", "brand", "logo-email.png")),
  ],
];

for (const [name, run] of jobs) {
  const info = await run();
  console.log(`[brand] ${name} ${info.width}x${info.height}`);
}

const favicon = await ico([16, 32, 48]);
writeFileSync(out("app", "favicon.ico"), favicon);
console.log(`[brand] app/favicon.ico 16/32/48 (${favicon.length} bytes)`);
