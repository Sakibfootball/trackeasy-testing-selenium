const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://productivity-web-app-nine.vercel.app/');
    await driver.sleep(500)
    //Test case:1 LOGIN=========================================
    await driver
    .findElement(By.className("chakra-button css-16ak6rm")).click();
    await driver.sleep(500)
    await driver.findElement(By.id("email")).sendKeys("gazi@gazi.com");
    await driver.sleep(500)
    await driver.findElement(By.id("password")).sendKeys("1669417526");
    await driver.sleep(500)
    await driver.findElement(By.className("chakra-button css-1389xl")).click();
    await driver.sleep(10000)
// LOGOUT =====================================================
    await driver.findElement(By.className("chakra-menu__menu-button css-2wa1nz")).click()
    await driver.sleep(5000)

    await driver.actions()
        .keyDown(Key.ARROW_DOWN)
        .perform()
    await driver.sleep(5000)
    

    await driver.actions()
        .keyDown(Key.ENTER)
        .perform()
    await driver.sleep(5000)
  } finally {
    await driver.quit();
  }
})();