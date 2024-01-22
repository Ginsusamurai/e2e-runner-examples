const { expect } = require('@playwright/test')

exports.logInPage = class logInPage {

    constructor(page){
        this.page = page
        this.userInput = page.locator('#wpName1')
        this.passwordInput = page.locator('#wpPassword1')
        this.logInBtn = page.locator('#wpLoginAttempt')
    }

    async login(creds){
        await this.userInput.fill(creds.userName)
        await this.passwordInput.fill(creds.password)
        await this.logInBtn.click()
    }

}