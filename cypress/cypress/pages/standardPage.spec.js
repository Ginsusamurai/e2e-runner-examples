class standardPage{

    elements ={

        signInButton : () => cy.get('#global-sign-in-link'),

        registerButton: () => cy.get('#global-register-link'),

        searchButton : () => cy.get('.wiki-tools__search'),

        themeSwitchButton : () => cy.get('.wiki-tools__theme-switch'),
    
        userAvatarButton : () => cy.get('#user-avatar-a'),
    
        userSignoutButton : () => cy.get('#global-navigation__signout-button')
    }

    clickSignup(){

        this.elements.signInButton.click();

    }

    signOut(){

        this.elements.userSignoutButton.click();

    }



}


module.exports = new standardPage();

