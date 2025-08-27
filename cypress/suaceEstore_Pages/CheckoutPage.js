class CheckoutPage {
  fillUserInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').clear().type(firstName);
    cy.get('[data-test="lastName"]').clear().type(lastName);
    cy.get('[data-test="postalCode"]').clear().type(postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('.summary_total_label').should('contain.text', 'Total');
  }

  finishCheckout() {
    cy.get('[data-test="finish"]').click();
  }

  verifyOrderComplete() {
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!').and('be.visible');
  }
}
export const checkoutPage = new CheckoutPage;
