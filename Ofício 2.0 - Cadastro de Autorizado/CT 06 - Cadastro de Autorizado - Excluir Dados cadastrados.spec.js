/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
/// <reference types="cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro de Autorizado - Excluir Dados cadastrados', function () {
    it('Cadastro de Autorizado - Excluir Dados cadastrados', function () {
      cy.get('#trigger').click() // Acessar Menu
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de cadastro
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de oficio
      cy.get('[id="formMenu:j_idt269"]').click() // Clicar na opção de Autiorizado
      cy.get('#formAutorizado').contains('Nome').type('TESTE AUTOMACAO ALTERADO') // Preencher nome do autorizado
      cy.get('[id="formAutorizado:filtrarAutorizados"]').click() // Clicar no botão "Filtrar"
      cy.get('[id="formAutorizado:dataTableAutorizado:0:btnAcaoExcluir"]').click() // Clicar no botão "Excluir"
      cy.get('[id="formConfirmExcluirAutorizado:j_idt426"]').contains('Sim').click({force: true}) // Clicar na opção "Sim"
      cy.get('.ui-messages-info-summary').contains('Autorizado TESTE AUTOMACAO ALTERADO removido com sucesso.') // Validar mesagem de sucesso
    })
  })
})