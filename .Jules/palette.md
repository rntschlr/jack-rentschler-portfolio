## 2024-01-01 - Init

## 2024-05-22 - Accessibility of Dynamic Toggles
**Learning:** Icon-only toggle buttons (like mobile menus) require both `aria-label` (for identification) and `aria-expanded` (for state). `aria-label` should ideally be dynamic ("Open menu" vs "Close menu") to provide clear context to screen reader users.
**Action:** Always check mobile menu implementations for these two attributes and ensure focus styles are visible (using `focus-visible` to avoid ugly mouse-click outlines).
