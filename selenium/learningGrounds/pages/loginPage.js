// var webdriver = require('selenium-webdriver')
// const {By} = require('selenium-webdriver')
// var driver = new webdriver.Builder().forBrowser('chrome').build()
// driver.manage().setTimeouts({implicit: (10000)})
var BasePage = require ('../pages/basePage.js');



class LoginPage extends BasePage{

    get userInput() { return driver.findElement(By.id('#wpName1'))}
    get passwordInput() { return driver.findElement(By.id('#wpPassword1'))}
    get logInBtn() { return driver.findElement(By.id('#weLoginAttempt'))}

    async login(creds){
        await this.userInput.fill(creds.userName)
        await this.passwordInput.fill(creds.password)
        await this.logInBtn.click()
    }

}

module.exports = new LoginPage()