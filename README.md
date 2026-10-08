# Ex00 - Personal Portfolio

## Event Lifecycle Explanation
When the user clicks the "Toggle Theme" button:
1. **User Action:** User clicks the `Toggle Theme` button on the interface.
2. **Event Firing:** The browser fires a `click` event target on the `#theme-toggle` DOM element.
3. **JavaScript Callback:** The registered `addEventListener` listener executes its anonymous callback function.
4. **DOM/CSS Mutation:** The script toggles the `data-theme="dark"` attribute on `document.body`, triggering CSS custom property updates across all element styles dynamically.
