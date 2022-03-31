/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
/// <reference types="cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro de Autorizado - Editar Dados cadastrados', function () {
    it('Cadastro de Autorizado - Editar Dados cadastrados', function () {
      cy.get('#trigger').click() // Acessar Menu
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de cadastro
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de oficio
      cy.get('[id="formMenu:j_idt269"]').click() // Clicar na opção de Autiorizado
      cy.get('#formAutorizado').contains('Nome').type('TESTE AUTOMACAO') // Preencher nome do Autiorizado
      cy.get('[id="formAutorizado:filtrarAutorizados"]').click() //Clicar no botão de filtrar
      cy.get('[id="formAutorizado:dataTableAutorizado:0:btnAcaoEditar"]').click() // Clicar no botão "Editar"
      cy.get('[id="formCadastroEdicaoAutorizado:autorizadoNomeCadastroEdicao"]').clear().type('TESTE AUTOMACAO ALTERADO') // Preencher novo nome do Autiorizado
      cy.get('[id="formCadastroEdicaoAutorizado:btnSalvar"]').click() // Clicar no botão "Salvar"
      cy.get('.ui-messages-info-summary').contains('Autorizado alterado com sucesso.') // Validar mensagem de sucesso
    })
  })
})