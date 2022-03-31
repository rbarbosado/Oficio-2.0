/// [Script version: 0.1]
/// [Script created: rbarbosado@minsait.com]
/// <reference types="Cypress" />

describe('Oficio 2.0', function () {
  it('verifica o título da aplicação', function () {
    cy.visit('http://10.129.201.70:7030/processum2webOficio/?login=TECNICA#')
    cy.title().should('be.equal', 'Ofício 2.0')
  })

  describe('Cadastro Autorizado - Realizar Cadastro selecionando Órgão', function () {
    it('Cadastro Autorizado - Realizar Cadastro selecionando Órgão', function () {
      cy.get('#trigger').click() // Acessar Menu
      cy.get('#formMenu > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de cadastro
      cy.get('.mp-level-open > :nth-child(6) > :nth-child(1) > :nth-child(1)').click() // Acessar opção de oficio
      cy.get('[id="formMenu:j_idt269"]').click() // Clicar na opção autorizado
      cy.get('#formAutorizado').contains('Novo').click() // clicar no campo novo
      cy.get('#formCadastroEdicaoAutorizado').contains('Nome').click().type('TESTE AUTOMACAO') // Preencher campo nome
      cy.get('#formCadastroEdicaoAutorizado').contains('CPF').click().type('12345678910') // Preencher campo CPF
      cy.get('[id="formCadastroEdicaoAutorizado:selectOrgaoCadastroEdicao"]').select("Policia Civil") // Selecionar opção da lista de valor
      cy.get('#formCadastroEdicaoAutorizado').contains('E-mail').click().type('testemail@teste.com') // Preencher campo de email
      cy.get('#formCadastroEdicaoAutorizado').contains('Telefone:').click().type('81935458014') // Preencher campo de telefone
      cy.get('#formCadastroEdicaoAutorizado').contains('Celular').click().type('81987542158') // Preencher campo de celular
      cy.get('#formCadastroEdicaoAutorizado').contains('CEP').click().type('32584236') // Preencher campo de CEP
      cy.get('[id="formCadastroEdicaoAutorizado:btnSalvar"]').click() // clicar no campo Salvar
     cy.get('#msgs > .ui-messages-info > ul > li > .ui-messages-info-summary').contains('Autorizado cadastrado com sucesso.') // Validar mensagem de sucesso
    })
  })
})