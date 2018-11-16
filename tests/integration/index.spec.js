const BASE_URL = 'http://localhost:3000';

describe('nuxt uid module', () => {
  let page, response;
  const getText = selector => {
    return page.$eval(selector, node => node.textContent);
  };

  beforeAll(async () => {
    page = await browser.newPage();
    response = await page.goto(BASE_URL, {
      waitUntil: 'domcontentloaded',
    });
  });

  afterAll(async () => {
    await page.close();
  });

  it('has uid text', async () => {
    const text = await getText('#base-text');
    expect(text).toMatch(/[0-9]+/);
  });

  it('UID does not change even after reloading', async () => {
    const firstHtml = await response.text();

    const responseReload = await page.reload({
      waitUntil: 'domcontentloaded',
    });
    const reloadedHtml = await responseReload.text();

    expect(firstHtml).toBe(reloadedHtml);
  });
});
