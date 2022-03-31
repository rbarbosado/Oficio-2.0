/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro Autorizado - Realizar pesquisa por nome', function () {
    it('Cadastro Autorizado - Realizar pesquisa por nome', function () {
      cy.get('#trigger').click() // Acessar Menu
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de cadastro
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de oficio
      cy.get('[id="formMenu:j_idt269"]').click() // Clicar na opção Autorizado
      cy.get('[id="formAutorizado:autorizadoFiltroNome"]').click().type('TESTE AUTOMACAO') // Clicar no campo de Nome e pesquisar
      cy.get('#formAutorizado').contains('Filtrar').click() // Clicar no botão de Filtrar
    })
  })
})