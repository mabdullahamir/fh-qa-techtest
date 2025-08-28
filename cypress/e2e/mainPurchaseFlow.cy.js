import {loginPage} from '../suaceEstore_Pages/LoginPage';
import {inventoryPage} from '../suaceEstore_Pages/InventoryPage';
import {cartPage} from '../suaceEstore_Pages/CartPage';
import {checkoutPage} from '../suaceEstore_Pages/CheckoutPage';


describe('Saucedemo E-Store - End-to-End Purchasing Flow', function () {
  before(function () {
    cy.visit('/')
    cy.fixture('users').as('user')
  })

  it('Should complete purchase successfully including login, product selection, checkout, and order completion', function () {
    // Login
    loginPage.login(this.user.standard.username, this.user.standard.password)
    loginPage.checkUrl();

    // Select a product & go to cart
    inventoryPage.selectProduct('Sauce Labs Backpack');
    inventoryPage.addProductToCart();
    inventoryPage.goToCart();

    // Remove product from cart
    cartPage.removeProductFromCart('Sauce Labs Backpack');

    // Select another product, go to cart & checkout
    inventoryPage.selectProduct('Sauce Labs Bolt T-Shirt');
    inventoryPage.addProductToCart();
    inventoryPage.goToCart();
    cartPage.verifyProductInCart('Sauce Labs Bolt T-Shirt');
    cartPage.checkout();
    
    //Complete order info, check total & finish
    checkoutPage.fillUserInfo('Deckard', 'Shaw', '12345');
    checkoutPage.calculateTotal();
    checkoutPage.finishCheckout();

    //Thank you message
    checkoutPage.verifyOrderComplete();

    // Logout
    loginPage.logout();
  });

});
