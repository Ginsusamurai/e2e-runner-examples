/// <reference types="cypress" />
// import signInPage from "../../../pages/signInPage"
import logInPage from "../../pages/logInPage"
import standardPage from "../../pages/standardPage"



describe("series of tests", () => {
  
    const data = {}

    beforeEach(() => {
        cy.fixture('loginCreds').as('creds').then((narp) =>{
            data.creds = narp
        })
    })
    
    it('test1', function () {
        cy.fixture('loginCreds.json').as('creds1')
        cy.log(this.creds) // valid data
        cy.log('@creds1') // string
        // cy.log(@creds1) // decorators not enabled
        cy.log("@creds1") // string only
        cy.log(data) //valid
    })

    it('should login', () => {
        cy.visit("https://zeldawiki.wiki/wiki/Main_Page")
        cy.log('a')
        standardPage.clickLogIn()
        cy.log('b')
        logInPage.login(data.creds)
        cy.contains('Log out')
    })
})