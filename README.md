# FRNK Landing — Accordion on All Devices

This package keeps the original hero/logo layout and only adds **Tell me more** buttons to each **How it Works** card. Clicking the button expands an inline description **on all devices** (no desktop auto-open).

## Files
- `index.html` — HTML with three cards, each containing:
  - a `button.hiw-toggle` with `aria-expanded` and `aria-controls`
  - a hidden `div.hiw-extra.is-hidden` with `aria-live="polite"`
- `styles.css` — Minimal styles that match your screenshot’s layout (warm background, light cards).
- `README.md` — Notes and instructions.

## Use
Replace your repo’s existing files or copy the snippets into your current layout. Commit & push; Vercel should redeploy.

© 2025 FRNK
