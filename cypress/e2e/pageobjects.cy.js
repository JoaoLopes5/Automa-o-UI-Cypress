/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'
const { cadastroPage } = require("../support/cadastro.page")
const cadastrarPage = require("../support/cadastrar.page")
const { profilePage } = require("../support/profile.page")

describe('Teste de criação de conta', () => {
  beforeEach(()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/#')
  })
  
  it('Deve criar conta com sucesso', () => {
    cadastroPage.openCadastro()
    cadastrarPage.cadastrar(faker.internet.email().replace(/[{}]/g, ''), faker.internet.password().replace(/[{}]/g, ''))
    profilePage.customerName().should('exist')
  })
})