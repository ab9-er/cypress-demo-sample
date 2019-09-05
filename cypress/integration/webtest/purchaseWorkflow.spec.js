/// <reference types="Cypress" />

describe('eCommerce search and buy', () => {

    it('I navigate to the website', () => {
        cy
          .visit('/')
          .get('.privacy-message-close--1b44d')
          .click();
    })
        
    it('I search for an iPhone to buy', () => {
        cy
          .get('#desktopSearch')
          .type('iphone {Enter}')
          .get('.close-overlay')
          .click()
          .get('.product-list-heading')
          .should('contain', 'iphone')
          .get('[data-product-id="3769035"]')
          .click()
          .get('[content="3769035"]')
          .should('be.visible');
    })

    it('I should add the product to cart and proceed till checkout', () => {
        cy
          .get('#button--add-to-basket')
          .click()
          .get('.add-to-basket-view-basket-link')
          .should('be.visible')
          .click()
          .get('.close-overlay')
          .click()
          .get('#link-button--basket-continue-securely')
          .click()
          .get('[for="guest:true"]')
          .should('be.visible')
          .click()
          .get('#email')
          .should('be.visible')
          .type('test+mail@gmail.com')
          .get('#loginForm')
          .click()
          .get('[data-id="delivery"]')
          .click()
          .get('#title')
          .type('Mr.')
          .get('#firstName')
          .type('John')
          .get('#lastName')
          .type('Smith')
          .get('#phoneNumber-number')
          .type('07070707070')
          .get('#searchPostcode')
          .type('EC1 4DG')
          .get('#postcodeSearchForm')
          .click()
          .get('#addressSearchSelect')
          .should('be.visible')
          .select('0')
          .get('[data-test="delivery-address-use-address"]')
          .should('be.visible')
          .click()
          .get('[for="deliveryMethod-5:5"]')
          .should('be.visible')
          .click()
          .get('[data-test="day-picker-container"]')
          .should('be.visible')
          .get(".day-picker_c-dayPicker__dateButton__04fff:not(.button_c-button--disabled__e88bb)")
          .eq(1)
          .click()
          .get('.form_formSubmitButtonContainer__59d60 button')
          .should('be.visible')
          .click()
          .get('[data-test="delivery-details-message"] strong')
          .eq(0)
          .should(($deliveryText) => {
            var deliveryDate = $deliveryText.text().split(' ')
            var today = new Date();
            var deliveryDay = new Date(deliveryDate[2] + ' ' + deliveryDate[1] + ', 2019')

            var diff = deliveryDay.getDate() - today.getDate();

            expect(diff).to.eq(2)
          })
        cy.screenshot('validatedScreenshot', {capture: 'viewport'})
    })
});
