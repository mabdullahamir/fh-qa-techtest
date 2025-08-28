class CheckoutPage {
  fillUserInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').clear().type(firstName);
    cy.get('[data-test="lastName"]').clear().type(lastName);
    cy.get('[data-test="postalCode"]').clear().type(postalCode);
    cy.get('[data-test="continue"]').click();
    
  }

  calculateTotal() {
    cy.get('[data-test="total-label"]').should('be.visible');

    cy.get('[data-test="subtotal-label"]')
    .invoke('text')
    .then((text) => {
      const itemTotal = parseFloat(text.replace('Item total: $', ''));
      
      cy.get('[data-test="tax-label"]')
        .invoke('text')
        .then((taxText) => {
          const tax = parseFloat(taxText.replace('Tax: $', ''));
          
          cy.get('[data-test="total-label"]')
            .invoke('text')
            .then((totalText) => {

              const total = parseFloat(totalText.replace('Total: $', ''));
              expect(total).to.eq(itemTotal + tax);

            });
        });
    });
  }

  finishCheckout() {
    cy.get('[data-test="finish"]').click();
  }

  verifyOrderComplete() {
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!').and('be.visible');
  }

  continue() {
    cy.get('[data-test="continue"]').click();
  }

  getError() {
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')
  }
}
export const checkoutPage = new CheckoutPage;
