/// <reference types="cypress" />

describe('Home', () => {
  it('should be open homepage', () => {
    cy.visit('/');
  });
});
