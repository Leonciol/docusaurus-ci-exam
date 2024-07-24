const puppeteer = require('puppeteer');

describe('Docusaurus site', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the home page', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('.hero__title');
    const title = await page.$eval('.hero__title', el => el.textContent);
    expect(title).toBe('Welcome to Docusaurus');
  });

});
