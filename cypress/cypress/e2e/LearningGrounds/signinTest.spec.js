import signInPage from "../pages/signInPage"
import landingPage from "../pages/standardPage"



describe("series of tests", () => {
  
    it('should login', () => {
        cy.visit('https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Tears_of_the_Kingdom')
        
        landingPage.signInPage()
        signInPage.userInput().type('test')
        signInPage.passwordInput().type('pass')
        signInPage.loginBtn().click()
    })
})