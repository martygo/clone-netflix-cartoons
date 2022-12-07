describe('Home', () => {
  it('should be open homepage', () => {
    cy.viewport('macbook-13');

    cy.visit('/');
  });

  it('Element h1 should have class', () => {
    cy.visit('/');

    cy.get('h1').should('have.class', 'App__collection__content--title');
  });

  it('Homepage should have one list', () => {
    cy.visit('/');

    cy.get('.App__collection__discover__list')
      .first()
      .children()
      .should(($lis) => {
        expect($lis, '5 items').to.have.length(5);
      });
  });
});
