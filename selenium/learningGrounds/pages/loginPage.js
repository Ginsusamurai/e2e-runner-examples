// var webdriver = require('selenium-webdriver')
// const {By} = require('selenium-webdriver')
// var driver = new webdriver.Builder().forBrowser('chrome').build()
// driver.manage().setTimeouts({implicit: (10000)})
var BasePage = require ('../pages/basePage.js');
const {By} = require('selenium-webdriver');
const assert = require('assert')


class LoginPage extends BasePage{

    get userInput() { return driver.findElement(By.id('wpName1'))}
    get passwordInput() { return driver.findElement(By.id('wpPassword1'))}
    get logInBtn() { return driver.findElement(By.id('wpLoginAttempt'))}

    async login(creds){
        await this.userInput.sendKeys(creds.userName)
        await this.passwordInput.sendKeys(creds.password)
        let x = await this.userInput.getAttribute('value')
        let y = await this.passwordInput.getAttribute('value')
        await assert.equal(x, creds.userName)
        await assert.equal(y,creds.password)
        await this.logInBtn.click()
    }

}

module.exports = new LoginPage()