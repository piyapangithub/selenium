const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder()
  .forBrowser(Browser.FIREFOX)
  .usingServer("http://localhost:4444/wd/hub/")
  .build();

  try {
    await driver.get('http://34.142.236.243:3000/');
    await driver.findElement(By.name('value')).sendKeys('GLI3', Key.RETURN);
    //await driver.wait(until.titleIs('p1 - text'), 1000);
  } finally {
    await driver.quit();
  }
  
})();