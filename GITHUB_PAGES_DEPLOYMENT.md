# GitHub Pages Deployment Guide

This project is fully configured and compiled for static hosting on **GitHub Pages**, **Vercel**, **Netlify**, or any static web host.

---

## 🚀 How It Was Built & Configured

1. **Relative Asset Linking (`base: './'`)**:
   - In `vite.config.ts`, `base: './'` is configured.
   - All HTML links to CSS (`./assets/index-*.css`), JavaScript (`./assets/index-*.js`), images, and fonts use **relative paths** instead of absolute root paths (`/`).
   - This ensures the website renders correctly whether hosted on:
     - User root domain: `https://<username>.github.io/`
     - Project repository subpath: `https://<username>.github.io/<repo-name>/` (e.g., `https://king9015313.github.io/Final/`)
     - Local filesystem or preview servers.

2. **Jekyll Processing Disabled (`.nojekyll`)**:
   - A `.nojekyll` file is included in `public/` and `dist/`.
   - This prevents GitHub Pages from ignoring folders or assets prefixed with underscores (standard for modern bundler outputs).

3. **SPA Routing Fallback (`404.html`)**:
   - A `404.html` redirection fallback is provided in `dist/` to prevent 404 errors on deep linking or page refreshes.

4. **Single-File Self-Contained Alternative (`client-ready.html`)**:
   - An all-in-one standalone file `dist/client-ready.html` is also generated where all CSS, fonts, and scripts are embedded. You can rename this to `index.html` if you want a 100% single-file distribution without any separate asset folders.

---

## 📦 Static Output Structure (`dist/`)

When you run `npm run build`, Vite produces the static files in the `/dist` directory:

```
dist/
├── index.html                           <- Main entry point (relative asset links)
├── 404.html                             <- GitHub Pages SPA fallback
├── .nojekyll                            <- Disables Jekyll processing
├── client-ready.html                    <- Self-contained standalone single HTML
├── assets/
│   ├── index-[hash].js                  <- Production compiled React + Framer Motion JS
│   ├── index-[hash].css                 <- Production compiled Tailwind CSS
│   └── ...
├── images/
│   ├── book-mockup.webp
│   └── ...
├── hm-digital-studio-logo.png
├── logo.png
└── ...
```

---

## 🛠️ Step-by-Step GitHub Pages Deployment

### Option A: Deploying from the `main` branch `/docs` or root

1. Copy the contents of `dist/` to your repository's root or `/docs` folder.
2. In your GitHub repository:
   - Navigate to **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
   - Choose your branch (e.g. `main`) and folder (`/ (root)` or `/docs`).
   - Click **Save**.
3. In 1–2 minutes, your website will be live at `https://<username>.github.io/<repository>/`.

### Option B: Deploying with `gh-pages` branch

```bash
# 1. Install gh-pages (optional helper)
npm install -D gh-pages

# 2. Add deploy script in package.json:
# "deploy": "npm run build && gh-pages -d dist"

# 3. Deploy
npm run deploy
```

In GitHub Repository Settings -> Pages, select the `gh-pages` branch.

### Option C: Automated GitHub Actions Workflow

Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🧪 Local Verification

To preview the built static bundle locally exactly as GitHub Pages will serve it:

```bash
npm run preview
```
This runs Vite's preview server directly against the `/dist` directory.
