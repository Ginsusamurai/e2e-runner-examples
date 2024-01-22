const { expect } = require('@playwright/test')

exports.standardPage = class standardPage {

    constructor(page){
        this.page = page

        this.logInButton = page.locator('#pt-login')
        this.registerButton = page.locator('#pt-createaccount')
        this.searchInput = page.locator('#searchInput')
        this.searchButton = page.locator('#searchButton')
        this.userSignoutButton = page.locator('#pt-logout')
    }

    async clickLogIn(){
        await this.logInButton.click()
    }

    async signOut(){
        await this.userSignoutButton.click()
    }

}