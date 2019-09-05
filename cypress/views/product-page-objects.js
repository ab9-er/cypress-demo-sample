/// <reference types="Cypress" />

const selectorList = {
  addToBasket: '#button--add-to-basket',
  goToBasket: '.add-to-basket-view-basket-link',
  productHeading: '.product-list-heading',
  productIdSelector: '[data-product-id="{0}"]',
  productIdDisplay: '[content="{0}"]'
}

class productPageObjects {

  addToBasket() {
    cy
      .get(selectorList.addToBasket)
      .should('be.visible')
      .click();
  }

  goToBasket() {
    cy
      .get(selectorList.goToBasket)
      .should('be.visible')
      .click();
  }

  verifyProductLandingPage(productName) {
    cy
      .get(selectorList.productHeading)
      .should('contain', productName)
  }

  selectProduct(productId) {
    cy
      .get(selectorList.productIdSelector.replace('{0}', productId))
      .click()
      .get(selectorList.productIdDisplay.replace('{0}', productId))
      .should('be.visible')
  }
}

export default productPageObjects;
