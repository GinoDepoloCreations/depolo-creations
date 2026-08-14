# DePolo Creations V4

A static, GitHub Pages-compatible portfolio. V4 is shorter, company-forward, motion-rich, and organized around physical and digital multidisciplinary work.

## Included

- index.html: concise homepage and Formspree inquiry
- work.html: filterable physical archive plus digital and contract work
- thank-you.html: inquiry completion page for conversion measurement
- styles.css: complete V4 design system and responsive layout
- script.js: menu, filters, hover films, reveals, and validation
- assets/favicon.svg: browser tab icon using the existing DC mark
- assets: existing project images and compressed preview films

## Preview

Open index.html directly, or run python -m http.server 8080 from this folder and visit http://localhost:8080.

## Publish with GitHub Pages

Copy this folder's contents to the root of the existing GinoDepoloCreations/depolo-creations repository. Keep CNAME at the repository root. GitHub Pages redeploys after the commit reaches main.

## Formspree

The inquiry posts to https://formspree.io/f/maewokoj and requests a redirect to https://depolocreations.com/thank-you.html. Submit one live test after deployment and confirm Formspree accepts the _next redirect.

Budget choices now begin under $500 and progress through $10,000+.

## Cloudflare Web Analytics

Cloudflare requires the site-specific Web Analytics beacon token from the Cloudflare dashboard.

1. Open Cloudflare, then Web Analytics.
2. Add or select depolocreations.com.
3. Copy the JavaScript beacon Cloudflare provides.
4. Paste it immediately before the closing body tag in index.html, work.html, and thank-you.html.

Do not use an invented token. Once enabled, page traffic plus visits to thank-you.html provide a lightweight inquiry-conversion count without Google Analytics or cookies.

## Digital portfolio migration

V4 presently links digital and contract cards to their original GinoDePolo.com project pages. This keeps the work visible immediately while original images, GIFs, and video files are archived. Local media can replace those links incrementally without another layout rewrite.
