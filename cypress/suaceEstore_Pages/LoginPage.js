class LoginPage {
  login(username, password) {
    cy.get('[data-test="username"]').clear().type(username);
    cy.get('[data-test="password"]').clear().type(password);
    cy.get('[data-test="login-button"]').click();
  }
  checkUrl() {
    cy.url().should('include', '/inventory.html');
  }
  unsuccessfulLogin() {
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match');
  }
}
export const loginPage = new LoginPage;
