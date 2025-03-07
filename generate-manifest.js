const fs = require('fs');

// Read the TypeScript code
const providerCode = fs.readFileSync('provider.ts', 'utf8');

// Create the manifest object
const manifest = {
  id: "anitaku-provider",
  name: "AniTaku Provider",
  description: "Online streaming provider for AniTaku (formerly GoGoAnime)",
  manifestURI: "https://raw.githubusercontent.com/Shamshoo/seanime2/refs/heads/main/anitaku.json",
  version: "1.0.0",
  author: "Your Name",
  type: "online-streaming-provider",
  language: "typescript",
  lang: "en",
  payload: providerCode
};

// Write the manifest to a JSON file with proper formatting
fs.writeFileSync('anitaku.json', JSON.stringify(manifest, null, 4));

console.log('Manifest generated successfully!');
