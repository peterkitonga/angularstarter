import { And } from 'cypress-cucumber-preprocessor/steps';

And('I hit escape', () => {
  cy.get('body').type('{esc}');
});

And('I hit enter', () => {
  cy.get('body').type('{enter}');
});

And('I wait {string} ms', (time: string) => {
  cy.wait(parseInt(time));
});

And(/^I click on the button "([^"]*)"$/, (buttonName: string) => {
  cy.contains('button', buttonName).click({ force: true });
});
