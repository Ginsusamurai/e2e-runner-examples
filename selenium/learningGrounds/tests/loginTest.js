const assert = require('assert')
const standardPage = require('../pages/standardPage.js')
const loginPage = require('../pages/loginPage.js')

const creds = {
    'userName':,
    'password':
}
// driver = await new Builder().forBrowser('chrome').build();

describe('login test', function (){
    this.timeout(50000)

    it('logs in', async function() {
        var baseUrl = 'https://zeldawiki.wiki'
        await standardPage.enter_url(baseUrl)
        let title = await driver.getTitle()
        assert.equal(title, 'Zelda Wiki')
        await standardPage.clickLogIn()

        standardPage.closeBrowser()
    })

})