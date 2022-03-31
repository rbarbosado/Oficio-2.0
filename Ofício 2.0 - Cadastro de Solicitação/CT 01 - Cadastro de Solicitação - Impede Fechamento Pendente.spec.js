/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro de Solicitação - Impede Fechamento Pendente', function () {
    it('Cadastro de Solicitação - Impede Fechamento Pendente', function () {
      cy.get('#trigger').click().wait(1500) // Acessar Menu
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click().wait(1500) // Acessar opção de cadastro
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click().wait(1500) // Acessar opção de oficio
      cy.get('a[href*="#"]').contains('Tipo de Solicitação').click().wait(1500) // Acessar tipo de solicitação
      cy.get('#tipoDeSolicitacaoFiltroForm').contains('Novo').click().wait(1500)// Clicar no botão novo
      cy.get('#tipoDeSolicitacaoCadastroForm').contains('Nome').click().type('TESTE AUTOMACAO').wait(1500) // Preencher informações do nome
      cy.get('#tipoDeSolicitacaoCadastroForm').contains('Impede Fechamento Pendente').click().wait(1500) // Selecionar o checkbox de Impede Fechamento Pendente
      cy.get('#tipoDeSolicitacaoCadastroForm').contains('Salvar').click().wait(1500) // Clicar no botão salvar
    })
  })
})