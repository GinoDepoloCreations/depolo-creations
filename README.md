# DePolo Creations — static portfolio V3

A two-page, responsive studio portfolio built from the local DePolo Creations project archive. It includes a homepage, a complete work index, linked published projects, and lightweight motion previews. No build tools, CMS, or paid hosting required.

## Launch checklist

1. Open `index.html` locally to preview it.
2. Review project titles and descriptions for factual accuracy.
3. The inquiry CTA is already connected to `GinoDePoloCreations@gmail.com`.
4. The structured inquiry form is connected to Formspree form `maewokoj`. Confirm the form in the Formspree dashboard and submit one live test after deployment.
5. Confirm every capability accurately describes work DePolo Creations can deliver.

## Publish free with GitHub Pages

1. Create a new public GitHub repository (for example, `depolo-creations`).
2. Upload everything inside this folder to the repository root. `index.html` must be at the root.
3. In the GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then click **Save**.
6. GitHub will show the public URL after deployment, usually within a few minutes.

## Connect a custom domain

In **Settings → Pages**, enter the domain under **Custom domain**. Then update DNS at the domain registrar using the exact records GitHub shows. Enable **Enforce HTTPS** once it becomes available.

## Editing

- Copy and project order: `index.html`
- Core colors, type, and layout: `styles.css`
- V3 typography, archive, and form refinements: `refinements.css`
- Menu, archive filtering, hover previews, and form guard: `script.js`
- Full project library: `work.html`
- Images, logo, and hero video: `assets/`

The Google fonts are loaded remotely. To make the site fully self-contained, download licensed font files into `assets/fonts/` and update the CSS with local `@font-face` rules.
