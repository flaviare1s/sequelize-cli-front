describe("Login correto com usuário verificado!", () => {
  it("Deve realizar login corretamente, com usuário admin válido.", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('[placeholder="E-mail"]')
      .type('pokihod589@eduhed.com')
      .should('have.value', 'pokihod589@eduhed.com');

    cy.get('[placeholder="Senha"]')
    .type('123456')
    .should('have.value', '123456');
  });
});
