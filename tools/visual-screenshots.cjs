const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DIST_PORT = process.env.PORT || 5000;
const DIST_URL = `http://localhost:${DIST_PORT}`;
const OUT_DIR = path.resolve(__dirname, '..', 'visual-screenshots');

function runCommand(cmd, args = [], opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', shell: true, ...opts });
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))));
  });
}

async function startServer() {
  // Start http-server serving ./dist
  const server = spawn('npx', ['http-server', 'dist', '-p', String(DIST_PORT), '-c-1'], {
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  return new Promise((resolve, reject) => {
    let resolved = false;
    server.stdout.on('data', (chunk) => {
      const s = String(chunk);
      process.stdout.write(s);
      if (!resolved && /Available on/.test(s)) {
        resolved = true;
        resolve(server);
      }
    });
    server.stderr.on('data', (chunk) => process.stderr.write(String(chunk)));
    server.on('error', (err) => reject(err));
    // fallback: if server doesn't print expected line, resolve after short delay
    setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve(server);
      }
    }, 2000);
  });
}

(async () => {
  try {
    // 1. Build site
    console.log('Building site...');
    await runCommand('npm', ['run', 'build']);

    // 2. Ensure output dir exists
    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

    // 3. Start static server
    console.log('Starting static server...');
    const server = await startServer();

    // 4. Launch puppeteer
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();

    // Desktop screenshot
    console.log('Capturing desktop screenshot...');
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
    await page.goto(DIST_URL, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: path.join(OUT_DIR, 'desktop.png'), fullPage: true });

    // Mobile screenshot (iPhone 12-ish)
    console.log('Capturing mobile screenshot...');
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 3 });
    await page.goto(DIST_URL, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: path.join(OUT_DIR, 'mobile.png'), fullPage: true });

    await browser.close();

    // 5. Kill server
    console.log('Shutting down server...');
    server.kill();

    console.log('Screenshots saved to:', OUT_DIR);
    process.exit(0);
  } catch (err) {
    console.error('Error generating screenshots:', err);
    process.exit(1);
  }
})();
