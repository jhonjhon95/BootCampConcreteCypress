/// <reference types="Cypress" />
import BuscaElements from '../elements/LoginElements'
const loginElements = new BuscaElements
const url = Cypress.config("baseUrl")

class BuscaPage {

    acessahome() {
        cy.visit('http://automationpractice.com/index.php')

    }

    buscaprodutovalido() {
        cy.get('#search_query_top').type('printed')
        cy.get('#searchbox > .btn').click()

    }

    buscaprodutoinvalido() {
        cy.get('#search_query_top').type('calça')
        cy.get('#searchbox > .btn').click()

    }

    validabuscavalido(){
        cy.contains('results have been found').should('exist')
    }

    validabuscainvalido(){
        cy.contains('0 results have been found.zz').should('exist')
    }

}

export default BuscaPage;