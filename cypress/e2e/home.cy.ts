/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.viewport('macbook-13');
    cy.visit('/');
  });

  it('should be open homepage', () => {
    cy.visit('/');
  });

  it('Element h1 should have class', () => {
    cy.get('h1').should('have.class', 'App__collection__content--title');
  });

  it('Should be show text more explorer', () => {
    cy.get('.App__collection__discover__title').first().trigger('mouseover');
    cy.get('.App__collection__discover__title--link')
      .invoke('attr', 'style', 'display: flex')
      .should('have.attr', 'style', 'display: flex');
  });

  it('Homepage should have one list', () => {
    cy.get('.App__collection__discover__list')
      .first()
      .children()
      .should(($lis) => {
        expect($lis, '5 items').to.have.length(5);
      });
  });
});
