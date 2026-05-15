# Mobile audit scripts

Playwright-based screenshot + layout audits. Use to verify mobile rendering after major UI changes.

Prerequisites: `npx playwright install chromium` (one-time).

The dev server must be running on `http://localhost:3000` before any of these.

## shot-all.mjs

Screenshots every key page on iPhone 13 viewport (390×844), scroll-through to trigger framer-motion animations, then captures full page. Writes PNGs to `/tmp/mobile-audit/` and prints per-page dimensions + horizontal-overflow flag as JSON.

```bash
node scripts/shot-all.mjs
```

## shot.mjs

Single-page screenshot at iPhone 13.

```bash
node scripts/shot.mjs <url> <output-path>
node scripts/shot.mjs http://localhost:3000/founding /tmp/founding.png
```

## shot-element.mjs

Screenshot a specific element by selector (mobile viewport).

```bash
node scripts/shot-element.mjs <url> <selector> <output-path>
node scripts/shot-element.mjs http://localhost:3000/founding "table" /tmp/table.png
```

## check-book.mjs

Loads /book on mobile and desktop, reports iframe dimensions after 5s wait. Used to verify the LeadConnector calendar embed actually renders.

```bash
node scripts/check-book.mjs
```

## debug-heights.mjs

Dumps the per-section bounding rect for /home so you can spot runaway sections.

```bash
node scripts/debug-heights.mjs
```
