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

    // Añadir 1er elemento
    await driver.findElement(By.id('add-to-cart-sauce-labs-backpack')).click();
    await driver.sleep(2000);
})();