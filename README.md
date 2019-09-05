# WEB AUTOMATION

This project uses Cypress as the framework to automate the tests.

# RUNNING THE TESTS

First, clone this repository locally.

Once cloned, install the node modules, i.e. Cypress and Electron by

    npm i

This will install Cypress and Electron browser.

To run the tests execute,

    npm run cypress:test

This will run the headless browser and execute the test. Once the test is completed, you'll find a screenshot in `cypress/screenshots` and a video of the test that was performed in `cypress/videos`.

We use `mocha` style assertions in the test.
