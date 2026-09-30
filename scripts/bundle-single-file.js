import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

function bundleSingleFile() {
  console.log('Generating single-file bundle with vite.singlefile.config.ts...');
  execSync('npx vite build --config vite.singlefile.config.ts', { stdio: 'inherit' });

  const distDir = path.resolve(process.cwd(), 'dist-single');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist-single/index.html does not exist.');
    process.exit(1);
  }

  let html = fs.readFileSync(indexHtmlPath, 'utf-8');
  const assetsDir = path.join(distDir, 'assets');
  const assetFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];

  // Find CSS files
  const cssFiles = assetFiles.filter(f => f.endsWith('.css'));
  let embeddedCss = '';
  for (const cssFile of cssFiles) {
    const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf-8');
    embeddedCss += `\n/* === INLINED ${cssFile} === */\n` + cssContent;
  }

  // Remove external CSS links from HTML
  html = html.replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, '');

  // Inject embedded CSS
  if (embeddedCss) {
    html = html.replace('</head>', `<style>\n${embeddedCss}\n</style>\n</head>`);
  }

  // Find JS files
  const jsFiles = assetFiles.filter(f => f.endsWith('.js'));
  let embeddedJs = '';
  for (const jsFile of jsFiles) {
    const jsContent = fs.readFileSync(path.join(assetsDir, jsFile), 'utf-8');
    embeddedJs += `\n// === INLINED ${jsFile} ===\n` + jsContent;
  }

  // Remove external JS module scripts
  html = html.replace(/<script[^>]+type=["']module["'][^>]*src=["'][^"']+["'][^>]*><\/script>/gi, '');

  // Inject embedded JS before </body>
  if (embeddedJs) {
    html = html.replace('</body>', `<script type="module">\n${embeddedJs}\n</script>\n</body>`);
  }

  // Save to public/client-ready.html, dist/client-ready.html, and root client-ready.html
  const outputTargets = [
    path.resolve(process.cwd(), 'client-ready.html'),
    path.resolve(process.cwd(), 'public', 'client-ready.html'),
    path.resolve(process.cwd(), 'dist', 'client-ready.html')
  ];

  for (const target of outputTargets) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, html, 'utf-8');
    console.log(`Successfully generated single-file self-contained HTML: ${target} (${(html.length / 1024).toFixed(1)} KB)`);
  }
}

bundleSingleFile();
