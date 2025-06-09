describe('Login correto com usuário verificado!', () => {
  it('Deve realizar login corretamente com usuário admin válido', () => {
    cy.visit('/login'); 

    cy.get('[placeholder="E-mail"]')
      .type('testecypress69@gmail.com')
      .should('have.value', 'testecypress69@gmail.com');

    cy.get('[placeholder="Senha"]')
      .type('Senha123')
      .should('have.value', 'Senha123');

    cy.intercept('POST', '**/auth/login').as('login');

    cy.wait(100);
    cy.get('.bg-blue-600').click();

    cy.wait('@login').its('request.body').should((body) => {
      expect(body.email).to.eq('testecypress69@gmail.com');
      expect(body.senha).to.eq('Senha123');
    });

    cy.url().should('not.include', '/login');

    cy.window().should((win) => {
      const token = win.localStorage.getItem('token');
      expect(token).to.be.a('string').and.not.be.empty;
    });
  });
})
