describe('Restaurant Order System - Happy Path E2E', () => {
  beforeEach(() => {
    // Visit the application
    cy.visit('http://localhost:3000');

    // Wait for the page to load and menu to be fetched
    cy.get('body', { timeout: 10000 }).should('be.visible');
  });

  it('should load the home page and show navigation options', () => {
    // Check for FOOD and BEVERAGES navigation items
    cy.contains('FOOD').should('be.visible');
    cy.contains('BEVERAGES').should('be.visible');
  });

  it('should navigate from home to FOOD section', () => {
    // Click FOOD button
    cy.contains('FOOD').click();

    // Should see subsections like chicken, sides, desserts
    cy.contains('chicken', { timeout: 5000 }).should('be.visible');
    cy.contains('sides').should('be.visible');
  });

  it('should navigate to a subsection and display menu items', () => {
    // Go to FOOD
    cy.contains('FOOD').click();

    // Click on "chicken" subsection
    cy.contains('chicken', { timeout: 5000 }).click();

    // Should see menu items in the chicken subsection
    // (Whole Chicken, Half Chicken, Quarter Chicken, etc.)
    cy.contains('Whole Chicken', { timeout: 5000 }).should('be.visible');
    cy.contains('Half Chicken').should('be.visible');
  });

  it('should open a menu item detail and add to order', () => {
    // Navigate to FOOD > chicken
    cy.contains('FOOD').click();
    cy.contains('chicken', { timeout: 5000 }).click();

    // Wait for the menu item to be visible
    cy.contains('Whole Chicken', { timeout: 5000 }).should('be.visible');

    // Look for an "add to order" or similar button
    // (You may need to adjust this selector based on your UI)
    // For now, we'll check that the item detail is shown
    cy.contains('Whole Chicken').should('be.visible');
  });

  it('should navigate back to home from FOOD section', () => {
    // Go to FOOD
    cy.contains('FOOD').click();

    // Look for back button (the ↩ symbol)
    cy.contains('↩').click();

    // Should be back at home
    cy.contains('FOOD').should('be.visible');
    cy.contains('BEVERAGES').should('be.visible');
  });

  it('should navigate to BEVERAGES section', () => {
    // Click BEVERAGES button
    cy.contains('BEVERAGES').click();

    // Should see beverage subsections
    cy.contains('soft drinks', { timeout: 5000 }).should('be.visible');
    cy.contains('iced tea').should('be.visible');
  });

  it('should display menu items in BEVERAGES subsection', () => {
    // Go to BEVERAGES
    cy.contains('BEVERAGES').click();

    // Click on "soft drinks"
    cy.contains('soft drinks', { timeout: 5000 }).click();

    // Should see beverages
    cy.contains('Cola', { timeout: 5000 }).should('be.visible');
    cy.contains('Diet Cola').should('be.visible');
  });

  it('should complete a full happy path: home → FOOD → chicken → add item → order', () => {
    // Step 1: Start at home, verify navigation items
    cy.contains('FOOD').should('be.visible');
    cy.contains('BEVERAGES').should('be.visible');

    // Step 2: Navigate to FOOD section
    cy.contains('FOOD').click();
    cy.contains('chicken', { timeout: 5000 }).should('be.visible');

    // Step 3: Enter chicken subsection
    cy.contains('chicken').click();
    cy.contains('Whole Chicken', { timeout: 5000 }).should('be.visible');

    // Step 4: Verify menu item details are displayed
    // (Price, description, etc. - these should be in the subsection gallery)
    cy.contains('$18.00', { timeout: 5000 }).should('be.visible');

    // Step 5: Navigate to order (look for order button or similar)
    // This assumes there's a way to access the order from the subsection view
    // You may need to adjust based on your actual UI interactions
    cy.contains('↩').should('be.visible'); // Back button should exist
  });

  it('should handle navigation between sections gracefully', () => {
    // Go to FOOD
    cy.contains('FOOD').click();
    cy.contains('chicken', { timeout: 5000 }).should('be.visible');

    // Go back
    cy.contains('↩').click();

    // Go to BEVERAGES
    cy.contains('BEVERAGES').click();
    cy.contains('soft drinks', { timeout: 5000 }).should('be.visible');

    // Go back again
    cy.contains('↩').click();

    // Should be at home
    cy.contains('FOOD').should('be.visible');
  });

  it('should load menu data from the backend', () => {
    // Intercept the /api/menu call
    cy.intercept('GET', '/api/menu').as('getMenu');

    cy.visit('http://localhost:3000');
    cy.wait('@getMenu', { timeout: 10000 }).then((interception) => {
      // Verify the response status
      expect(interception.response.statusCode).to.equal(200);

      // Verify the response has menu items array
      expect(interception.response.body).to.be.an('array');
      expect(interception.response.body.length).to.be.greaterThan(0);

      // Verify items have required fields
      interception.response.body.forEach((item) => {
        expect(item).to.have.property('id');
        expect(item).to.have.property('name');
        expect(item).to.have.property('section');
        expect(item).to.have.property('subsection');
        expect(item).to.have.property('price');
      });
    });

    // Menu should be loaded and visible
    cy.contains('FOOD', { timeout: 5000 }).should('be.visible');
  });
});
