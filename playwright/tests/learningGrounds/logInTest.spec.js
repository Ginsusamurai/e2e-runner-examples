const { test, expect } = require('@playwright/test')
const { logInPage } = require('../../pages/logInPage')
const { standardPage } = require('../../pages/standardPage')
const creds = require('../../testdata/logInCreds.json')

test('log in to site', async ({ page }) => {
    const playwrightLogin = new logInPage(page)
    const playwrightStandard = new standardPage(page)
    await page.goto('https://zeldawiki.wiki');
    await playwrightStandard.clickLogIn()
    await playwrightLogin.login(creds)
    // const msg = 'narp'
    // page.on('console', (msg) => {
    //     console.log(msg)
    // })
    await page.goto('https://zeldawiki.wiki');
    const textCheck = await page.getByText('Log out')
    console.log(creds)
    await expect (textCheck != undefined ).toBeTruthy()
})