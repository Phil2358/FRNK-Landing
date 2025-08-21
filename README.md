# FRNK Landing (Static Package)

This is a minimal static package for the FRNK landing page with an accessible **How it Works** accordion that collapses on mobile and is always expanded on tablet/desktop.

## Files
- `index.html` — main page (includes accessible ARIA attributes and Formspree waitlist form).
- `styles.css` — monochrome theme (text `#222`, background `#fff`, card `#f2f0ec`).
- `README.md` — this file.

## Behavior
- On **mobile**: each How it Works card shows a short blurb and a **Tell me more** button that expands inline. Button toggles to **Show less** when open. Expanded content containers use `aria-live="polite"`, and the button updates `aria-expanded` appropriately.
- On **tablet/desktop (≥768px)**: the detailed content is **always visible** and the toggle buttons are hidden.

## Deploy
Replace your repo's existing `index.html` and `styles.css` with these, commit, and push. If you're on Vercel, it should auto-redeploy.

© 2025 FRNK
