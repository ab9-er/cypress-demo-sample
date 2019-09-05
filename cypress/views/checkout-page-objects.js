/// <reference types="Cypress" />

const selectorList = {
  guestCheckoutMode: '[for="guest:true"]',
  guestEmail: '#email',
  guestEmailFormSubmit: '#loginForm',
  homeDeliveryMode: '[data-id="delivery"]',
  deliveryDetailTitle: '#title',
  deliveryDetailFirstName: '#firstName',
  deliveryDetailLastName: '#lastName',
  deliveryDetailPhoneNumber: '#phoneNumber-number',
  deliveryDetailPostcode: '#searchPostcode',
  deliveryDetailSearchAddress: '#postcodeSearchForm',
  deliveryDetailDeliveryAddresses: '#addressSearchSelect',
  deliveryDetailGoToDeliveryType: '[data-test="delivery-address-use-address"]',
  deliveryDetailNamedDeliveryMode: '[for="deliveryMethod-5:5"]',
  deliveryDetailDatePickerForm: '[data-test="day-picker-container"]',
  deliveryDetailAvailableDate: '.day-picker_c-dayPicker__dateButton__04fff:not(.button_c-button--disabled__e88bb)',
  deliveryDetailConfirmDeliveryMethod: '.form_formSubmitButtonContainer__59d60 button',
  deliveryDetailConfirmationDate: '[data-test="delivery-details-message"] strong'
}

class checkoutPageObjects {

  selectGuestCheckoutMode() {
    cy
      .get(selectorList.guestCheckoutMode)
      .should('be.visible')
      .click();
  }

  enterGuestEmailAndContinue(guestEmail) {
    cy
      .get(selectorList.guestEmail)
      .should('be.visible')
      .type(guestEmail)
      .get(selectorList.guestEmailFormSubmit)
      .click()
  }

  selectHomeDeliveryMode() {
    cy
      .get(selectorList.homeDeliveryMode)
      .should('be.visible')
      .click()
  }

  fillGuestDetails(title, firstName, lastName, phoneNumber, postCode) {
    cy
      .get(selectorList.deliveryDetailTitle)
      .type(title)
      .get(selectorList.deliveryDetailFirstName)
      .type(firstName)
      .get(selectorList.deliveryDetailLastName)
      .type(lastName)
      .get(selectorList.deliveryDetailPhoneNumber)
      .type(phoneNumber)
      .get(selectorList.deliveryDetailPostcode)
      .type(postCode)
      .get(selectorList.deliveryDetailSearchAddress)
      .click()
      .get(selectorList.deliveryDetailDeliveryAddresses)
      .should('be.visible')
      .select('0')
      .get(selectorList.deliveryDetailGoToDeliveryType)
      .click()
  }

  selectNamedDayDelivery() {
    cy
      .get(selectorList.deliveryDetailNamedDeliveryMode)
      .should('be.visible')
      .click()
      .get(selectorList.deliveryDetailDatePickerForm)
      .should('be.visible')
      .get(selectorList.deliveryDetailAvailableDate)
      .eq(1)
      .click()
      .get(selectorList.deliveryDetailConfirmDeliveryMethod)
      .should('be.visible')
      .click()
  }

  confirmDeliveryDetails() {
    cy
      .get(selectorList.deliveryDetailConfirmationDate)
      .eq(0)
        .should(($deliveryText) => {
          var deliveryDate = $deliveryText.text().split(' ')
          var today = new Date();
          var deliveryDay = new Date(deliveryDate[2] + ' ' + deliveryDate[1] + ', 2019')

          var diff = deliveryDay.getDate() - today.getDate();

          expect(diff).to.eq(2)
      })
  }
}

export default checkoutPageObjects;
