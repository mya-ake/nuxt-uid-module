import consola from 'consola';

const env = {
  name: !!process.env.TEST_NAME,
  mixin: !!process.env.TEST_MIXIN,
};

consola.info('Start test', env);

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

  it('env check', async () => {
    const text = await getText('#env');
    expect(text).toBe(JSON.stringify(env));
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
