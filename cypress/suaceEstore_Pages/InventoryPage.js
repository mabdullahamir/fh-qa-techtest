class InventoryPage {
  selectProduct(productName) {
    cy.get('[data-test="inventory-item-name"]').contains(productName).click();
   
  }
  addProductToCart() {
    cy.contains('button','Add to cart')
      .click();
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
  }

  goToCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }

}
export const inventoryPage = new InventoryPage;
