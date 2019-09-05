/// <reference types="Cypress" />

const selectorList = {
  searchBar: '#desktopSearch'
}

class homePageObjects {

  searchProduct(inputString) {
    cy
      .get(selectorList.searchBar)
      .type(inputString + ' {Enter}')
  }
}

export default homePageObjects;
