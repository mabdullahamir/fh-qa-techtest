class CartPage {
  verifyProductInCart(productName) {
    cy.contains('.inventory_item_name', productName).should('be.visible');
  }

  checkout() {
    cy.get('[data-test="checkout"]').click();
  }

  removeProductFromCart(productName) {
    cy.contains('.inventory_item_name', productName)
      .parents('.cart_item')
      .find('button').click();
      cy.get('[data-test="continue-shopping"]').click();
    }
}
export const cartPage = new CartPage;
