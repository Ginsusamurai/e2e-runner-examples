const assert = require('assert')
const standardPage = require('../pages/standardPage.js')
const loginPage = require('../pages/loginPage.js')
const creds = require('../../testdata/creds.json')
const {By} = require('selenium-webdriver');


// driver = await new Builder().forBrowser('chrome').build();

describe('login test', function (){
    this.timeout(50000)

    it('logs in', async function() {
        var baseUrl = 'https://zeldawiki.wiki'
        await standardPage.enter_url(baseUrl)
        let title = await driver.getTitle()
        await assert.equal(title, 'Zelda Wiki')
        await standardPage.clickLogIn()
        await loginPage.login(creds)
        await standardPage.findElementByText('Log out')
        await standardPage.confirm_logged_in()
        await standardPage.closeBrowser()
    })

})