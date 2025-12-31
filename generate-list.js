const fs = require('fs');
const path = require('path');

// Chemin vers le dossier images
const imagesDir = path.join(__dirname, 'src', 'images');

// Fonction pour lister les fichiers .jpg
function getImageFiles(dir) {
    try {
        const files = fs.readdirSync(dir);
        return files.filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i));
    } catch (error) {
        console.error('Erreur lors de la lecture du dossier:', error);
        return [];
    }
}

// Générer la liste
const imageFiles = getImageFiles(imagesDir);
const listString = imageFiles.map(file => `            '${file}'`).join(',\n');

// Lire le fichier index_web.html
const webFilePath = path.join(__dirname, 'src', 'index_web.html');
let content = fs.readFileSync(webFilePath, 'utf8');

// Remplacer la liste imageFiles
const regex = /(const imageFiles = \[[\s\S]*?\];)/;
const newList = `const imageFiles = [
${listString}
        ];`;

content = content.replace(regex, newList);

// Écrire le fichier mis à jour
fs.writeFileSync(webFilePath, content, 'utf8');

console.log(`Liste mise à jour avec ${imageFiles.length} images.`);