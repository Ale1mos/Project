const {Builder, By, Key} = require('selenium-webdriver');
// const { Select } = require('selenium-webdriver/common');


(async function example(){
    let driver = new Builder().forBrowser('chrome').build();

    await driver.get('https://www.saucedemo.com/');

    // PRIMERA VISTA / Login
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.css('#password')).sendKeys('secret_sauce');
    await driver.findElement(By.css('[data-test="login-button"]')).click();
    await driver.executeScript('console.log("1");');

    const dropdownElement = await driver.findElement(By.className('product_sort_container'));

    // Hacer clic en la lista desplegable para abrirla
    await dropdownElement.click();

    // Simular teclas de flecha hacia abajo para navegar a la segunda opción
    await dropdownElement.sendKeys(Key.ARROW_DOWN);

    // Simular tecla Enter para seleccionar la opción
    await dropdownElement.sendKeys(Key.ENTER);
    await driver.sleep(8000)

    await driver.executeScript('console.log("2");');

    // Add 1er producto
    await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click();
    await driver.sleep(2000);
    // 1er Scroll
    const oneScroll = await driver.findElement(By.className("footer"));
    await driver.actions().move({ origin: oneScroll }).perform();
    await driver.sleep(2000);
    // Add 2do product
    await driver.findElement(By.id('add-to-cart-test.allthethings()-t-shirt-(red)')).click();
    await driver.sleep(2000);
    // 2do Scroll
    const twoScroll = await driver.findElement(By.id('item_1_img_link'));
    await driver.actions().move({ origin: twoScroll }).perform();
    await driver.sleep(2000);
    // Add 3er product
    await driver.findElement(By.id('add-to-cart-sauce-labs-bolt-t-shirt')).click();
    await driver.sleep(2000);
    // 3er Scroll
    const threeScroll = await driver.findElement(By.className("shopping_cart_link"));
    await driver.actions().move({ origin: threeScroll }).perform();
    await driver.sleep(2000);
    // Click in cart
    await driver.findElement(By.className('shopping_cart_link')).click();
})();