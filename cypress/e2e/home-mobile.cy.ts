/// <reference types="cypress" />

describe('Logo', () => {
  context('desktop resolution', () => {
    beforeEach(() => {
      cy.viewport('macbook-13');
    });

    it('Should be show the logo version desktop', () => {
      cy.visit('/');

      cy.get('.App__header__logo--large').should('be.visible');
      cy.get('.App__header__logo--medium').should('not.be.visible');
    });
  });

  context('iphone-x resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('Should be show the logo version mobile', () => {
      cy.visit('/');

      cy.get('.App__header__logo--large').should('not.be.visible');
      cy.get('.App__header__logo--medium').should('be.visible');
    });
  });
});
