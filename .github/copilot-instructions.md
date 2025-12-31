# AI Coding Assistant Instructions for Image Gallery App

## Project Overview
This is a vanilla JavaScript web application for browsing and filtering images organized by geographic zones. The app displays photos from a "Voie Verte" (Green Way) project with structured metadata embedded in filenames.

## Architecture
- **Single-page application** with embedded HTML/CSS/JS in `src/index.html`
- **No build tools** - runs directly in modern browsers
- **File-based data** - images stored in `src/images/` (full size) and `src/vignettes/` (thumbnails)
- **Client-side filtering** - all logic runs in browser after loading image metadata

## Key Components
- `ImageGallery` class: Core gallery logic with filtering and lightbox
- Filename parsing: `zoneXX-DDMM-HHMM-type.jpg` → structured metadata
- Lightbox viewer with navigation and preloading
- Filter UI: Zone (radio), Date/Time/Type (checkboxes)

## Naming Convention
Images must follow: `zone{2-digit}-{4-digit date}-{4-digit time}-{type}.jpg`
- **Zone**: `zone01` to `zone08` (padded to 2 digits)
- **Date**: `DDMM` format (e.g., `1506` = June 15)
- **Time**: `HHMM` format (e.g., `1005` = 10:05)
- **Type**: `05m`, `10m`, `15m`, `data` (minute markers or data images)

Example: `zone01-1506-1005-05m.jpg`

## Browser Requirements
- Requires **Chrome 86+** or **Edge 86+** for File System Access API
- Shows error page for Firefox users
- Must be served from `http://` or `https://` (not `file://`) for API access

## Development Workflow
1. **Add images**: Place full-size in `src/images/`, thumbnails in `src/vignettes/`
2. **Follow naming**: Ensure consistent zone/date/time/type format
3. **Test locally**: Use VS Code Live Server or similar to serve `src/index.html`
4. **User interaction**: Click "Sélectionner le dossier images" to load from selected directory

## Code Patterns
- **French comments**: Keep UI text and comments in French
- **Zone 01 default**: Gallery starts filtered to `zone01`
- **Lazy loading**: Images load on demand with `loading="lazy"`
- **Async preloading**: Lightbox preloads adjacent images
- **Fallback handling**: Vignettes shown if full images fail to load

## Common Tasks
- **Adding zones**: Update zone radio buttons in `createFilterUI()`
- **New image types**: Add to parsing logic in `parseImageName()`
- **Styling**: Modify CSS in `<style>` block within HTML
- **Error handling**: Check console for File System API errors

## File Structure
```
src/
├── index.html          # Main app (HTML/CSS/JS)
├── images/             # Full-size images
├── vignettes/          # Thumbnails (300px wide grid)
├── images_v1/          # Previous version images
├── vignettes_v1/       # Previous version thumbnails
└── image_generale_html/
    └── zones.html      # Sliced zone overview image
```

## Gotchas
- File System Access API requires user gesture (button click)
- Images loaded via `showDirectoryPicker()` but displayed from relative paths
- Zone numbers displayed as integers (remove `zone` prefix)
- Dates formatted as `DD/MM` for display
- Sorting by filename for consistent order