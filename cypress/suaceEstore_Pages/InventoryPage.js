class InventoryPage {
  selectProduct(productName) {
    cy.contains('.inventory_item_name', productName).click();
   
  }
  addProductToCart() {
    cy.contains('button','Add to cart')
      .click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }

  

}
export const inventoryPage = new InventoryPage;
