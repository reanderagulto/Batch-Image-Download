import { promises as fs } from 'fs'

const imagePath = 'images/';
import { images } from './data.js'

const downloadImage = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(imagePath + '/logo-' + filename, buffer);
}

images.forEach((image, index) => {
    downloadImage(image.url, image.fileName);
})
