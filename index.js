import { promises as fs } from 'fs'

const imagePath = 'images/';

const images = [
    {
        fileName: 'joyce-rey.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062315/joyce-rey-1.png"
    },
    {
        fileName: 'altman.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062337/the-altman-brothers-1.png"
    },
    {
        fileName: 'roh-habibi.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062331/roh-habibi-1.png"
    },
    {
        fileName: 'luxury.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062317/luxury-1.png"
    }, 
    {
        fileName: 'egypr.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062354/egypt-1.png"
    },
    {
        fileName: 'watson.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062341/watson-1.png"
    },
    {
        fileName: 'choo.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28055130/logo-choo-1.png"
    },
    {
        fileName: 'eklund-gomes.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062356/eklund-gomes-1.png"
    },
    {
        fileName: 'kirman.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062348/aron-kirman-1.png"
    },
    {
        fileName: 'zeder.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062310/jills-zeder-1.png"
    },
    {
        fileName: 'sfj.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062333/sfj-1.png"
    },
    {
        fileName: 'robert.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062329/robert-1.png"
    },
    {
        fileName: 'jarvis.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062308/jarvis-1.png"
    },
    {
        fileName: 'forbes.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/11/21063528/be0884ffd0d8c39c79053ee2737dc9cb.png"
    },
    {
        fileName: 'kofi.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28055134/logo-kofi-1.png"
    },
    {
        fileName: 'anne.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062347/anne-1.png"
    },
    {
        fileName: 'flagg.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28055714/josh-flagg-1.png"
    },
    {
        fileName: 'lenz.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062352/dolly-lenz-1.png"
    },
    {
        fileName: 'tutor.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062339/tracy-1.png"
    },
    {
        fileName: 'gold.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062358/gary-gold-1.png"
    },
    {
        fileName: 'dg.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/11/21063804/3eda3d2250943d316db8c92c4d91ed74.png"
    },
    {
        fileName: 'mitchell.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/11/21063910/ebe1d22ee586d2e83c3646355f1956d5.png"
    },
    {
        fileName: 'newman.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/11/21063933/c5a191baf83b6b377fbb58eafee0f6b9.png"
    },
    {
        fileName: 'adler.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/06/28062335/sueadler-1.png"
    },
    {
        fileName: 'carroll.png',
        url: "https://resources.agentimage.com/redesign/uploads/2022/11/21065118/d2ca7503a30a1e58c786e84857740e03.png"
    },
];


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
