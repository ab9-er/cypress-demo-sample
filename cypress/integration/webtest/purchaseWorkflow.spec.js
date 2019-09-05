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
    })
        
    it('When I search for an iPhone to buy', () => {
      homePage.searchProduct('iphone');
      generic.clearCookieMessage();
      productPage.verifyProductLandingPage('iphone')
      productPage.selectProduct("3769035")
    })

    it('Then I should add the product to cart and proceed till checkout', () => {
      productPage.addToBasket();
      productPage.goToBasket();
      generic.clearCookieMessage();
      basketPage.continueToCheckout();
      checkoutPage.selectGuestCheckoutMode();
      checkoutPage.enterGuestEmailAndContinue('test+mail@gmail.com')
      checkoutPage.selectHomeDeliveryMode();
      checkoutPage.fillGuestDetails('Mr.', 'John', 'Smith', '07070707070', 'EC1 4DG')
      checkoutPage.selectNamedDayDelivery()
      checkoutPage.confirmDeliveryDetails()
      generic.takeScreenshot('validatedScreenshot')
    })
});
