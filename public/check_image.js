const fs = require('fs');

function getPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  // PNG signature check
  if (buffer.readUInt32BE(0) !== 0x89504E47) {
    throw new Error('Not a valid PNG file');
  }
  // IHDR chunk starts at byte 12. Width is at 16, height at 20.
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

try {
  console.log('hero.png:', getPngDimensions('public/new-pricingimg/hero.png'));
  console.log('barimg.png:', getPngDimensions('public/new-pricingimg/barimg.png'));
} catch (e) {
  console.error(e);
}
