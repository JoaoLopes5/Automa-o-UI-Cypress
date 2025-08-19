/// <reference types="cypress"/>
describe('Deve validar o fluxo de checkout com o uso do intercept', () => {
    beforeEach(() => {
        cy.setCookie('ebacStoreVersion','v2',{domain: 'lojaebac.ebaconline.art.br'})
        cy.visit('/')
    });


    it('Deve adicionar itens no carrinho', () => {
       cy.intercept('PUT', '**/public/updateCart/*').as('addCarrinho')
        cy.get(':nth-child(2) > .r-mh9cjk > .css-175oi2r').click()
        cy.get(':nth-child(5) > .r-18u37iz > :nth-child(1) ').click()
        cy.get('[data-testid="addToCart"]').click()
         cy.wait('@addCarrinho').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      cy.get('[data-testid="productName"]').should('contain','Tênis Esportivo')
    })
        
    });
    it('Deve atualizar itens do carrinho', () => {
        cy.get(':nth-child(2) > .r-mh9cjk > .css-175oi2r').click()
        cy.get(':nth-child(18) > .r-18u37iz > :nth-child(1)').click()
        cy.get('[data-testid="addToCart"]').click()
         cy.intercept('PUT', '**/public/updateCart/*', {fixture:'noCategories.json'}).as('atualizarCarrinho')
        cy.get('[data-testid="addItem"]').click()
        cy.wait('@atualizarCarrinho').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.request.body.quantity).to.eq(2)})
      cy.get('[data-testid="itemsQty"]').should('contain','2')
    });

    it('Deve remover item do carrinho', () => {
         cy.get(':nth-child(2) > .r-mh9cjk > .css-175oi2r').click()
        cy.get(':nth-child(5) > .r-18u37iz > :nth-child(1) ').click()
        cy.get('[data-testid="addToCart"]').click()
        cy.intercept('PUT', '**/public/updateCart/*',{fixture: 'noCategories.json'}).as('removerCarrinho')
        cy.get('[data-testid="remove"]').click()
        cy.wait('@removerCarrinho').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)})
        cy.get('[data-testid="emptyCart"]').should('contain','Your cart is empty')

    });
});