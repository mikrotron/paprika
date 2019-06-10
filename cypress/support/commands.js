// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("visitStorybook", story => {
  cy.visit(`http://localhost:9009/iframe.html?id=${story}`);
});
