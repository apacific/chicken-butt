const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('Home Page (Selenium)', () => {
  let driver;
  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();
  }, 20000);
  afterAll(async () => {
    if (driver) await driver.quit();
  });
  it('should display the logo and menu options', async () => {
    await driver.get('http://localhost:3000/');
    const logo = await driver.findElement(By.css('img[alt="Restaurant Logo"]'));
    expect(await logo.isDisplayed()).toBe(true);
    const food = await driver.findElement(By.xpath("//*[contains(text(),'FOOD')]")).catch(() => null);
    const beverages = await driver.findElement(By.xpath("//*[contains(text(),'BEVERAGES')]")).catch(() => null);
    expect(food).not.toBeNull();
    expect(beverages).not.toBeNull();
  }, 20000);
});
