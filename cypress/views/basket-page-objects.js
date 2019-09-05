/// <reference types="Cypress" />

const selectorList = {
  continueToCheckout: '#link-button--basket-continue-securely'
}

class basketPageObjects {

  continueToCheckout() {
    cy
      .get(selectorList.continueToCheckout)
      .should('be.visible')
      .click();
  }
}

export default basketPageObjects;
