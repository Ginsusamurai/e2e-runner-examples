class signInPage{

    elements ={

        userInput : () => cy.get('.TextInput_input__1JaBs'),

        passwordInput : () => cy.get('.Password_inputWrapper__2oRBc'),

        loginBtn : () => cy.get('.Submit_buttonWrapper__33HZ0')

    }

    login(){

        this.elements.userInput.type();

        this.elements.passwordInput.type();

        this.elements.loginBtn().click();

    }

}

module.exports = new signInPage();

require('cypress-xpath')