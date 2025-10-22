import { And } from 'cypress-cucumber-preprocessor/steps';

And('I visit the page {string}', (url) => {
  cy.visit(url);
});

And('I reload the page', () => {
  cy.reload();
});

And('I should be redirected to {string} url', (url: string) => {
  cy.url().should('contains', url);
});
