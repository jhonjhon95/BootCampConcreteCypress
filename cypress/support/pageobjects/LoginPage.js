/// <reference types="Cypress" />
import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {

    acessarLogin() {
        cy.visit('/')
    }
    preencherFormulario() {
        cy.get('#email').type('admin@gmail.com')  
        cy.get('#passwd').type('admin')  
        cy.get('#SubmitLogin > span').click()
    }

    validaLogin() {
        cy.contains('admin admin').should('exist')
    }

    preencherFormularioinvalido() {
        cy.get('#email').type('invalido@gmail.com')  
        cy.get('#passwd').type('ainvalidodmin')  
        cy.get('#SubmitLogin > span').click()
    }

    validaLogininvalido() {
        cy.contains('admin admin').should('not.exist')
    }

}

export default LoginPage;