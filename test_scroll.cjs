const puppeteer = require('puppeteer-core');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\xczma\\.gemini\\antigravity\\brain\\43066f9b-e1cb-44e7-ae91-2c973bf2e5c1';

(async () => {
  console.log('Launching Edge...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--window-size=1920,1080', '--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Navigating to http://localhost:8080...');
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  // 1. Hero Screenshot (scroll 0)
  console.log('Capturing step 0: Hero...');
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'step0_hero.png') });

  // 2. Scroll 600px (Hero swallow phase)
  console.log('Scrolling to 600px...');
  await page.evaluate(() => window.scrollTo(0, 600));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'step1_hero_swallow.png') });

  // 3. Scroll 1600px (Slide 00: Autonomous Systems Builder)
  console.log('Scrolling to 1600px...');
  await page.evaluate(() => window.scrollTo(0, 1600));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'step2_slide00.png') });

  // 4. Scroll 2800px (Slide 01: SpotMicro Quadruped)
  console.log('Scrolling to 2800px...');
  await page.evaluate(() => window.scrollTo(0, 2800));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'step3_slide01.png') });

  console.log('Done capturing all verification frames!');
  await browser.close();
})();
