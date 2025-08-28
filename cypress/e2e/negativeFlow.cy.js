import {LoginPage} from '../suaceEstore_Pages/LoginPage';
import {InventoryPage} from '../suaceEstore_Pages/InventoryPage';
import {CartPage} from '../suaceEstore_Pages/CartPage';
import {CheckoutPage} from '../suaceEstore_Pages/CheckoutPage';

const loginPage = new LoginPage();
const cartPage = new CartPage();
const inventoryPage = new InventoryPage();
const checkoutPage = new CheckoutPage();


describe('Negative Flows', () => {
  beforeEach(function () {
    cy.visit('/')
    cy.fixture('users').as('user')
  })

  it('Should show error message on empty credentials', function () {
    // Attempt login with empty credentials 
    loginPage.loginButton();

    // Assert error message is displayed
    loginPage.loginWithoutCredentials();

});

  it('Should show error message on invalid credentials', function () {
    // Attempt login with invalid credentials
    loginPage.login(this.user.wrongUser.username, this.user.wrongUser.password);
    
    // Assert error message is displayed
    loginPage.unsuccessfulLogin();
   
  });


   it('Should show error if customer information is not added', function () {
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
