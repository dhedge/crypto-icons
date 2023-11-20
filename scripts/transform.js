const sharp = require('sharp');
const fs = require('fs');

const INPUT_PATH = 'src/icons';
const OUTPUT_PATH = 'icons';
const FILE_EXTENSION = 'png';

const SIZE = parseInt(process.env.SIZE);
const QUALITY = parseInt(process.env.QUALITY);

async function transform(path, sourceExtension = FILE_EXTENSION) {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    const [fileName, extension] = dirent.name.split('.');

    if (extension === sourceExtension) {
      await sharp(`${path}/${dirent.name}`)
        .resize({ width: SIZE, height: SIZE, withoutEnlargement: true })
        .png({ compressionLevel: 7, quality: QUALITY, effort: 10 })
        .toFile(`${OUTPUT_PATH}/${fileName}.png`);
    }
  }
}

transform(INPUT_PATH);
