/// <reference types="Cypress" />

import genericObjects from '../../views/generic-objects';
import homePageObjects from '../../views/home-page-objects';
import productPageObjects from '../../views/product-page-objects';
import basketPageObjects from '../../views/basket-page-objects';
import checkoutPageObjects from '../../views/checkout-page-objects';

const generic = new genericObjects();
const homePage = new homePageObjects();
const productPage = new productPageObjects();
const basketPage = new basketPageObjects();
const checkoutPage = new checkoutPageObjects();

describe('eCommerce search and buy', () => {

    it('Given I navigate to the website', () => {
      generic.openWebsite();
      generic.clearPrivacyMessage();
    });
        
    it('When I search for an iPhone to buy', () => {
      homePage.searchProduct(Cypress.env('productName'));
      generic.clearCookieMessage();
      productPage.verifyProductLandingPage(Cypress.env('productName'));
      productPage.selectProduct(Cypress.env('productId'));
    });

    it('Then I should add the product to cart and proceed till checkout', () => {
      productPage.addToBasket();
      productPage.goToBasket();
      generic.clearCookieMessage();
      basketPage.continueToCheckout();
      checkoutPage.selectGuestCheckoutMode();
      checkoutPage.enterGuestEmailAndContinue(Cypress.env('guestEmail'));
      checkoutPage.selectHomeDeliveryMode();
      checkoutPage.fillGuestDetails(Cypress.env('guestTitle'), 
                                    Cypress.env('guestFirstName'), 
                                    Cypress.env('guestLastName'), 
                                    Cypress.env('guestPhoneNumber'), 
                                    Cypress.env('guestPostCode'));
      checkoutPage.selectNamedDayDelivery();
      checkoutPage.confirmDeliveryDetails();
      generic.takeScreenshot(Cypress.env('screenshotFileName'));
    });
});
