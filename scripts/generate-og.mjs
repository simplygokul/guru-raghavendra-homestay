import path from 'node:path';
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const root = process.cwd();
const outputDir = path.join(root, 'public', 'og');

const cards = [
  ['home.jpg', 'src/assets/property/homestay-exterior-hero-daylight.jpg', 'Spacious, peaceful stay', 'Sri Guru Raghavendra HomeStay · Mopidevi'],
  ['stay.jpg', 'src/assets/rooms/spacious-bedroom-carved-wood-bed.jpg', 'Comfortable family stay', 'Space to settle in near Mopidevi Temple'],
  ['temple.jpg', 'src/assets/places/mopidevi-local-context.jpg', 'Mopidevi Temple guide', 'Stories, rituals, timings and visitor guidance'],
  ['explore.jpg', 'src/assets/terrace/terrace-overlooking-agricultural-fields.jpg', 'Explore around Mopidevi', 'Temple towns, culture and Krishna delta countryside'],
  ['gallery.jpg', 'src/assets/rooms/spacious-common-living-area.jpg', 'See the homestay', 'Rooms, common spaces, terrace and surroundings'],
  ['contact.jpg', 'src/assets/property/exterior-entrance-approach.jpg', 'Plan your Mopidevi stay', 'WhatsApp, call or get directions'],
];

const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

await mkdir(outputDir, { recursive: true });

for (const [filename, source, title, subtitle] of cards) {
  const overlay = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0" stop-color="#172319" stop-opacity="0.90" />
          <stop offset="0.68" stop-color="#172319" stop-opacity="0.35" />
          <stop offset="1" stop-color="#172319" stop-opacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#shade)" />
      <rect x="72" y="82" width="54" height="6" rx="3" fill="#e9874e" />
      <text x="72" y="330" fill="#ffffff" font-size="62" font-weight="700" font-family="Georgia, serif">${escapeXml(title)}</text>
      <text x="74" y="390" fill="#f4eee6" font-size="28" font-weight="500" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
      <text x="74" y="536" fill="#ffffff" font-size="24" font-weight="700" font-family="Arial, sans-serif">gururaghavendrahomestay.in</text>
    </svg>`);

  await sharp(path.join(root, source))
    .rotate()
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .composite([{ input: overlay, top: 0, left: 0 }])
    .jpeg({ quality: 86, progressive: true })
    .toFile(path.join(outputDir, filename));
}

console.log(`Generated ${cards.length} Open Graph images in ${outputDir}`);
