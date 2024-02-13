// var webdriver = require('selenium-webdriver')
// const {By} = require('selenium-webdriver')
// var driver = new webdriver.Builder().forBrowser('chrome').build()
// driver.manage().setTimeouts({implicit: (10000)})
const {Key} = require('selenium-webdriver')
var BasePage = require('./basePage.js')


class StandardPage extends BasePage{
    
    get LogInBtn() { return driver.findElement(By.id('#pt-login')) }
    get registerButton() { return driver.findElement(By.id('#pt-createaccount')) }
    get searchButton() { return driver.findElement(By.id('#searchButton')) }
    get userSignoutButton() { return driver.findElement(By.id('#pt-logout')) }
    
    // constructor(){
    //     super()
    //     // global.driver = driver
    //     // this.logInButton = page.locator('#pt-login')
    //     this.logInButton = driver.findElement(By.id('#pt-login'))

    //     // this.registerButton = page.locator('#pt-createaccount')
    //     this.registerButton = driver.findElement(By.id('#pt-createaccount'))

    //     // this.searchInput = page.locator('#searchInput')
    //     this.searchInput = driver.findElement(By.id('#searchInput'))

    //     // this.searchButton = page.locator('#searchButton')
    //     this.searchButton = driver.findElement(By.id('#searchButton'))

    //     // this.userSignoutButton = page.locator('#pt-logout')
    //     this.userSignoutButton = driver.findElement(By.id('#pt-logout'))
    // }

    async clickLogIn(){
        await this.logInButton.click()
    }

    async signOut(){
        await this.userSignoutButton.click()
    }

    async enter_url(theURL){
        await this.go_to_url(theURL);
    }

}

module.exports = new StandardPage()