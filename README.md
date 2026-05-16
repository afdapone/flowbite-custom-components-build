# Flowbite Modal Unbundled

This project demonstrates how to unbundle the Flowbite Modal component as a standalone module.

## Files
- `dist/flowbite-modal.min.js`: Standalone JavaScript for the Modal component (8.6kb).
- `dist/flowbite-modal.css`: Standalone CSS containing only the necessary Tailwind utilities for the Modal (52kb).
- `src/modal.html`: Example usage of the unbundled component.

## How to use

### 1. Include the files
Add the CSS and JS to your HTML:

```html
<link rel="stylesheet" href="path/to/flowbite-modal.css">
<script src="path/to/flowbite-modal.min.js"></script>
```

### 2. HTML Structure
Use the standard Flowbite Modal HTML structure:

```html
<button data-modal-target="default-modal" data-modal-toggle="default-modal" type="button">
  Toggle modal
</button>

<div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden ...">
  <!-- Modal content -->
</div>
```

### 3. Initialization
Initialize the modals by calling `initModals()`:

```html
<script>
  initModals();
</script>
```

Alternatively, use the `Modal` class directly:

```javascript
const $targetEl = document.getElementById('modalId');
const modal = new Modal($targetEl, options);
modal.show();
```

## Build Process

### JS Build
We use `esbuild` to bundle only the Modal component from `flowbite/lib/esm/components/modal`. This avoids pulling in the entire library.

```bash
npm run build:js
```

### CSS Build
We use Tailwind 4 with the `@source` directive to scan only the modal HTML, ensuring the CSS bundle is as small as possible.

```bash
npm run build:css
```
