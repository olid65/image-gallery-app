# Image Gallery App - Voie Verte

Une application web vanilla JavaScript pour naviguer et filtrer des images organisées par zones géographiques dans le cadre du projet "Voie Verte".

## Description

Cette application permet de visualiser une collection d'images organisées par zones, avec des fonctionnalités de filtrage par zone, date, heure et type d'image. Les images sont affichées sous forme de vignettes et peuvent être visualisées en plein écran dans une visionneuse lightbox.

## Prérequis

- Navigateur web moderne : **Chrome 86+** ou **Edge 86+** (requis pour l'API File System Access)
- Serveur web local pour servir les fichiers (non compatible avec `file://`)

## Installation en local

1. **Cloner ou télécharger le projet** :
   ```
   git clone <url-du-repo> image-gallery-app
   cd image-gallery-app
   ```

2. **Structure des fichiers** :
   Assurez-vous que la structure suivante est respectée :
   ```
   src/
   ├── index.html          # Fichier principal de l'application
   ├── images/             # Images en pleine résolution
   ├── vignettes/          # Vignettes (thumbnails) des images
   └── image_generale_html/
       └── zones.html      # Vue d'ensemble des zones
   ```

3. **Servir l'application** :
   - Utilisez un serveur web local comme VS Code Live Server, ou tout serveur HTTP simple.
   - Ouvrez `src/index.html` dans votre navigateur via `http://localhost:port` ou `https://localhost:port`.

   **Exemple avec VS Code Live Server** :
   - Installez l'extension "Live Server" dans VS Code.
   - Ouvrez `src/index.html` et cliquez sur "Go Live" en bas à droite.

## Versions disponibles

L'application est disponible en deux versions selon l'usage :

- **`index_local.html`** : Version pour utilisation locale avec sélection de dossier (utilise l'API File System Access).
- **`index_web.html`** : Version pour déploiement web (images chargées statiquement depuis le repo).

### Utilisation locale (index_local.html)

1. Ouvrez `src/index_local.html` dans Chrome/Edge via un serveur local (VS Code Live Server recommandé).
2. Cliquez sur "Sélectionner le dossier images" et choisissez le dossier contenant vos images.
3. Les images sont chargées dynamiquement depuis le dossier sélectionné.

### Déploiement web (index_web.html)

1. Placez vos images dans `src/images/` et `src/vignettes/`.
2. Exécutez le script de génération : `node generate-list.js` (nécessite Node.js).
3. Cela mettra automatiquement à jour la liste des images dans `src/index_web.html`.
4. Poussez sur GitHub et activez GitHub Pages.
5. Partagez le lien : les images sont chargées directement depuis le repo.

**Note** : Le script `generate-list.js` scanne automatiquement `src/images/` pour générer la liste. Réexécutez-le après avoir ajouté/modifié des images.

## Convention de nommage des fichiers

Les images doivent suivre le format strict : `zone{XX}-{DDMM}-{HHMM}-{type}.jpg`

- **Zone** : `zone01` à `zone08` (2 chiffres, zéro-padded)
- **Date** : `DDMM` (jour et mois, e.g., `1506` pour 15 juin)
- **Heure** : `HHMM` (heure et minute, e.g., `1005` pour 10:05)
- **Type** : `05m`, `10m`, `15m`, `data` (marqueurs de minute ou images de données)

Exemple : `zone01-1506-1005-05m.jpg`

## Notes importantes

- **Navigateur** : Firefox n'est pas supporté en raison de l'absence de l'API File System Access.
- **Sécurité** : L'application doit être servie via HTTP/HTTPS, pas directement depuis le système de fichiers.
- **Performance** : Les vignettes sont chargées en lazy loading pour optimiser les performances.
- **Mises à jour** : Pour ajouter de nouvelles zones, modifiez l'interface utilisateur dans `createFilterUI()`.

## Développement

- Le code principal se trouve dans `src/index.html` (HTML/CSS/JS intégré).
- Pas d'outils de build nécessaires - tout fonctionne directement dans le navigateur.
- Pour les tests, assurez-vous que les images suivent la convention de nommage.

## Dépannage

- **Erreur File System API** : Vérifiez que vous utilisez Chrome/Edge et que le site est servi via HTTP.
- **Images non chargées** : Vérifiez les chemins relatifs et la structure des dossiers.
- **Console d'erreurs** : Ouvrez les outils de développement (F12) pour voir les messages d'erreur.

---

*Cette application est développée pour le projet Voie Verte - Green Way.*