/// <reference types="cypress" />


class cadastrarPage{
    get #email() {return cy.get('#reg_email')}
    get #password() {return cy.get('#reg_password')}
    get #btnLogin() {return cy.get(':nth-child(4) > .button')}

    cadastrar(email,senha){
        this.#email.type(email)
        this.#password.type(senha)
        this.#btnLogin.click()
        
    }
}


module.exports = new cadastrarPage();