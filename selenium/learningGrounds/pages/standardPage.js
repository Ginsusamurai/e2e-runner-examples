// var webdriver = require('selenium-webdriver')
// const {By} = require('selenium-webdriver')
// var driver = new webdriver.Builder().forBrowser('chrome').build()
// driver.manage().setTimeouts({implicit: (10000)})
const assert = require('assert')

const {Key} = require('selenium-webdriver')
var BasePage = require('./basePage.js')
const {By} = require('selenium-webdriver');


class StandardPage extends BasePage{
    
    get LogInButton() { return driver.findElement(By.id('pt-login')) }
    get registerButton() { return driver.findElement(By.id('pt-createaccount')) }
    get searchButton() { return driver.findElement(By.id('searchButton')) }
    get userSignoutButton() { return driver.findElement(By.id('pt-logout')) }
    get userSignoutList() { return driver.findElements(By.css('#pt-logout')) }

    async clickLogIn(){
        await this.LogInButton.click()
    }

    async signOut(){
        await this.userSignoutButton.click()
    }

    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

    async confirm_logged_in(){
        let btn = await this.userSignoutList
        await assert(btn.length > 0, 'Not logged in')
    }

}

module.exports = new StandardPage()