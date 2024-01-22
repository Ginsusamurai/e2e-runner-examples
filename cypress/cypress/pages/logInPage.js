class logInPage{

    elements ={

        userInput : () => cy.get('#wpName1'),

        passwordInput : () => cy.get('#wpPassword1'),

        loginBtn : () => cy.get('#wpLoginAttempt')



    }

    login(creds){

        this.elements.userInput().type(creds.userName);

        this.elements.passwordInput().type(creds.password);

        this.elements.loginBtn().click();

    }

}

module.exports = new logInPage();

// require('cypress-xpath')