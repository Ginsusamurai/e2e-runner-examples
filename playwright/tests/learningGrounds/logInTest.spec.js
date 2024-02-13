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

test('click main series', async ({page}) => {
    await page.goto('https://zeldawiki.wiki')
    await expect(page).toHaveScreenshot('main_page.png', {mask: [page.locator('.GoogleCreativeContainerClass'), page.locator("#siteNotice"), page.locator('.mbox-image')]})
    await page.getByText('Tears of the Kingdom').click()
    await page.waitForURL('**/The_Legend_of_Zelda:_Tears_of_the_Kingdom')
    await expect(page).toHaveScreenshot('TOTK_page.png', {mask: [page.locator('.GoogleCreativeContainerClass'), page.locator("#siteNotice"), page.locator('.mbox-image')]})
    const textCheck = await page.getByText('Bosses')
    await expect (textCheck != undefined ).toBeTruthy()
})