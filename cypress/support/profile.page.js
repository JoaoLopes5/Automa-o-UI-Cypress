/// <reference  types="cypress"/>

export const profilePage ={
    customerName: () => {return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')},
}