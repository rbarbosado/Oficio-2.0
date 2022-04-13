/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
/// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro Autorizado - Validar mensagem de e-mail já cadastrado', function () {
    it('Cadastro Autorizado - Validar mensagem de e-mail já cadastrado', function () {
      cy.get('#trigger').click() // Acessar Menu
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de cadastro
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de oficio
      cy.get('[id="formMenu:j_idt269"]').click() // Clicar na opção de Autiorizado
      cy.get('#formAutorizado').contains('Novo').click() // Clicar no botão "Novo"
      cy.get('#formCadastroEdicaoAutorizado').contains('Nome').click().type('TESTE AUTOMACAO') // Preencher nome do autorizado
      cy.get('#formCadastroEdicaoAutorizado').contains('CPF').click().type('12345678910') // Preencher CPF do Autorizado
      //cy.get('[id="formCadastroEdicaoAutorizado:selectOrgaoCadastroEdicao"]').select("Policia Civil") // Selecionar opção da lista de valor
      cy.get('#formCadastroEdicaoAutorizado').contains('E-mail').click().type('testemail@teste.com') // Preencher e-mail do autorizado
      cy.get('#formCadastroEdicaoAutorizado').contains('Telefone:').click().type('81935458014') // Preencher teledone do autorizado
      cy.get('#formCadastroEdicaoAutorizado').contains('Celular').click().type('81987542158') // Preencher celular do autorizado
      cy.get('#formCadastroEdicaoAutorizado').contains('CEP').click().type('32584236') // Preencher CEP do autorizado
      cy.get('[id="formCadastroEdicaoAutorizado:btnSalvar"]').click() // Clicar no botão "Salvar"
      cy.get('.ui-messages-fatal-summary').contains('E-mail já cadastrado para a autoridade TESTE AUTOMACAO.') // Validar mensagem de e-mail já cadastrado
      cy.get('[id="formCadastroEdicaoAutorizado:j_idt455"]').contains('Sair').click() // Clicar no botão "Sair"
    })
  })
})