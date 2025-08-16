/// <reference types="cypress"/>

describe('Fluxo de checkout(carrinho de comprar)', () => {
   
    })

    it('Deve fazer checkout com sucesso', () => {
        cy.checkout()
        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')
        
    });

