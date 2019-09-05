/// <reference types="Cypress" />

const selectorList = {
  privacyMessageCloseButton: '.privacy-message-close--1b44d',
  cookieMessageCloseButton: '.close-overlay'
}

class genericObjects {

  openWebsite() {
    cy
      .visit('/');
  }

  clearPrivacyMessage() {
    cy
      .get(selectorList.privacyMessageCloseButton)
      .should('be.visible')
      .click();
  }

  clearCookieMessage() {
    cy
      .get(selectorList.cookieMessageCloseButton)
      .should('be.visible')
      .click()
  }

  takeScreenshot(fileName) {
    cy
      .screenshot(fileName, {capture: 'viewport'})
  }
}

export default genericObjects;
