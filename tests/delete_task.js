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
    await driver.sleep(5000)
    await driver.findElement(By.xpath('//*[@id="__next"]/div[2]/div/div/div[3]/a[13]/div/p')).click()
    await driver.sleep(10000)

    // TEST CASE 7: DELETE TASK========================================
    await driver.findElement(By.xpath("(//*[name()='svg'][@class='chakra-icon css-11wtkj0'])[2]")).click()
    await driver.sleep(10000)
    // await driver.actions().move({x: 13, y: 15, origin: Origin.POINTER}).perform()
  } finally {
    await driver.quit();
  }
})();