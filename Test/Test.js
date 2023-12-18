const {Builder, By, Key} = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();

await driver.get('https://www.saucedemo.com/');

// PRIMERA VISTA / Login
await driver.findElement(By.id('user-name')).sendKeys('standard_user');
await driver.findElement(By.css('#password')).sendKeys('secret_sauce');
await driver.findElement(By.css('[data-test="login-button"]')).click();
await driver.executeScript('console.log("1");');