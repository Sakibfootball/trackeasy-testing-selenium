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

    // Test case:2 ADD PROJECT=========================================
    await driver.findElement(By.xpath("(//*[name()='svg'][@class='chakra-icon css-h0gh2a'])[1]")).click()
    await driver.sleep(5000)
    await driver.actions()
        .keyDown(Key.TAB)
        .sendKeys("hello world 2")
        .perform()
    await driver.findElement(By.className("chakra-button css-f2hjvb")).click()
    await driver.sleep(10000)
  } finally {
    await driver.quit();
  }
})();