# Steps to Add Another Flowbite Component

To add a new component (e.g., **Dropdown**) to your standalone unbundled build, follow these steps:

### 1. Update `index.js`
Import the component directly from the Flowbite ESM library to keep the bundle size small.

```javascript
// Add these lines to index.js
import Dropdown, { initDropdowns } from 'flowbite/lib/esm/components/dropdown';

if (typeof window !== 'undefined') {
    window.Dropdown = Dropdown;
    window.initDropdowns = initDropdowns;
}

export { Dropdown, initDropdowns };
```

### 2. Update your HTML Reference
Tailwind 4 needs to see the HTML classes for the new component to include them in the CSS bundle. Add an example of the new component to `src/modal.html` (or create a new reference HTML file).

```html
<!-- Example: Add a dropdown button to src/modal.html -->
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" ...>
  Dropdown button
</button>
<!-- ... dropdown menu content ... -->
```

### 3. Update CSS Config (if necessary)
If you created a new HTML file for the new component, add it to `src/input.css` using the `@source` directive:

```css
@import "tailwindcss";
@source "./modal.html";
@source "./dropdown.html"; /* Add this line */
@plugin "flowbite/plugin";
```

### 4. Rebuild the Bundles
Run the build command to generate the updated JS and CSS files in the `dist/` folder.

```bash
npm run build
```

### 5. Initialize in your App
Call the initialization function for the new component in your HTML:

```html
<script>
    initModals();
    initDropdowns(); // Add this
</script>
```
