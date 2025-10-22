import { And } from 'cypress-cucumber-preprocessor/steps';

And(/^I click on the "(.*?)" element in the header$/, (elem: string) => {
  cy.get('[data-cy="menubar"]').find(`[data-cy="${elem}"]`).click();
});

And(/^I should (see|not see) the "(.*?)" element$/, (param: string, elem: string) => {
  cy.get(`[data-cy="${elem}"]`).should(param === 'see' ? 'be.visible' : 'not.exist');
});

And(/^I should (see|not see) the "(.*?)" avatar menu item$/, (param: string, text: string) => {
  cy.get(`[data-cy="avatar-menu"]`)
    .find('.p-menuitem')
    .should(param === 'see' ? 'contain' : 'not.contain', text);
});
