class standardPage{

    elements ={

        logInButton : () => cy.get('#pt-login'),

        registerButton: () => cy.get('#pt-createaccount'),

        searchInput : () => cy.get('#searchInput'),

        searchButton : () => cy.get('#searchButton'),
    
        userSignoutButton : () => cy.get('#pt-logout')
    }

    clickLogIn(){

        this.elements.logInButton().click();

    }

    signOut(){

        this.elements.userSignoutButton().click();

    }



}


module.exports = new standardPage();

