describe('Home Page', () => {
  it('should display the logo and menu options', () => {
    cy.visit('/');
    cy.get('img[alt="Restaurant Logo"]').should('be.visible');
    cy.contains('FOOD').should('be.visible');
    cy.contains('BEVERAGES').should('be.visible');
  });
});
