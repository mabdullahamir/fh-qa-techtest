import {loginPage} from '../suaceEstore_Pages/LoginPage';
import {inventoryPage} from '../suaceEstore_Pages/InventoryPage';
import {cartPage} from '../suaceEstore_Pages/CartPage';
import {checkoutPage} from '../suaceEstore_Pages/CheckoutPage';

let user;

describe('Saucedemo - End to end Purchase Flow', function () {
  before(function () {
    cy.visit('/')
    cy.fixture('users').then((data) => {
      user = data
    })
  })

  it('should complete purchase successfully', () => {
    // Login
    loginPage.login(user.standard.username, user.standard.password)

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

    checkoutPage.fillUserInfo('John', 'Smith', '12345');
    checkoutPage.finishCheckout();

    //Thank you message
    checkoutPage.verifyOrderComplete();
  });
});
