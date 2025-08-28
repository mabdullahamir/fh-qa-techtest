import {loginPage} from '../suaceEstore_Pages/LoginPage';
import {inventoryPage} from '../suaceEstore_Pages/InventoryPage';
import {cartPage} from '../suaceEstore_Pages/CartPage';
import {checkoutPage} from '../suaceEstore_Pages/CheckoutPage';


describe('Negative Flows', () => {
  beforeEach(function () {
    cy.visit('/')
    cy.fixture('users').as('user')
  })

  it('Should show error message on invalid credentials', function () {
    // Attempt login with invalid credentials
    loginPage.login(this.user.wrongUser.username, this.user.wrongUser.password);
    // Assert error message is displayed
    loginPage.unsuccessfulLogin();
   
  });


   it('Should show error if customer information is missing', function () {
    // Login
    loginPage.login(this.user.standard.username, this.user.standard.password);

    // Add product to cart
    inventoryPage.addProductToCart('Sauce Labs Backpack');
    inventoryPage.goToCart();

    // Proceed to checkout
    cartPage.checkout();

    // Continue without filling info
    checkoutPage.continue();

    // Assert error message
    checkoutPage.getError();
  });



});