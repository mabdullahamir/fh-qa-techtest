class LoginPage {
  login(username, password) {
    cy.get('[data-test="username"]').clear().type(username);
    cy.get('[data-test="password"]').clear().type(password);
    this.loginButton();
  }

  loginButton() {
    cy.get('[data-test="login-button"]').click();
  }

  checkUrl() {
    cy.url().should('include', '/inventory.html');
  }

  unsuccessfulLogin() {
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match');
  }

  loginWithoutCredentials() {
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username is required');
  }

  logout() {
    cy.get('button[id="react-burger-menu-btn"]').click();
   cy.get('[data-test="logout-sidebar-link"]').click();
  }
}
export const loginPage = new LoginPage;
