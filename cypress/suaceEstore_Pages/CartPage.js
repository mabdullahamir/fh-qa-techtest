class CartPage {
  verifyProductInCart(productName) {
    cy.get('[data-test="inventory-item-name"]').contains(productName).should('be.visible');
  }

  checkout() {
    cy.get('[data-test="checkout"]').click();
  }

  removeProductFromCart(productName) {
      cy.get('[data-test="inventory-item-name"]')
      .contains(productName)
      .parents('[data-test="inventory-item"]')
      .find('button').click();
      cy.get('[data-test="continue-shopping"]').click();
    }
}
export const cartPage = new CartPage;
