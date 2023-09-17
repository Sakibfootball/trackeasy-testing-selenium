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
    // Test case:2 ADD PROJECT=========================================
    await driver.findElement(By.xpath("(//*[name()='svg'][@class='chakra-icon css-h0gh2a'])[1]")).click()
    await driver.sleep(5000)
    await driver.actions()
        .keyDown(Key.TAB)
        .sendKeys("hello world2")
        .perform()
    await driver.findElement(By.className("chakra-button css-f2hjvb")).click()
    await driver.sleep(10000)

    // TEST CASE 3: ADD SECTION============================================
    await driver.findElement(By.xpath('//*[@id="__next"]/div[2]/div/div/div[3]/a[2]/div/p')).click()
    await driver.sleep(10000)
    await driver.findElement(By.className("chakra-text css-1bsgmhw")).click()
    await driver.sleep(10000)
    await driver.actions()
        .keyDown(Key.TAB)
        .sendKeys("hello world section")
        .perform()
    await driver.sleep(5000)
    await driver.findElement(By.className("chakra-button css-f2hjvb")).click()
    await driver.sleep(5000)

    // TEST CASE 4:ADD TASK============================================
    await driver.findElement(By.className("chakra-text css-krr2e9")).click();
    await driver.sleep(5000)
    await driver.actions()
        .keyDown(Key.TAB)
        .sendKeys("430")
        .perform()
  
    await driver.sleep(5000)
    
    await driver.actions()
        .keyDown(Key.TAB)
        .sendKeys("I had a very bad final exam")
        .perform()
    
    await driver.sleep(1000)
    
    await driver.findElement(By.className("chakra-button css-f2hjvb")).click();
    await driver.sleep(10000)
    
    
    //TEST CASE 5: SHARE THE PROJECT====================================== 
    await driver.findElement(By.className("chakra-text css-eufk94")).click();
    await driver.sleep(5000)
    await driver.actions()
        .keyDown(Key.TAB)
        .sendKeys("haidersakib20@gmail.com")
        .perform()
    
    await driver.sleep(5000)

    await driver.findElement(By.className("chakra-button css-f2hjvb")).click();
    await driver.sleep(10000)

    // TEST CASE 6: DELETE THE TASK
    await driver.findElement(By.xpath("(//*[name()='svg'][@class='chakra-icon css-11wtkj0'])[2]")).click()
    await driver.sleep(8000)

    // LOGOUT ==================================================
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