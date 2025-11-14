/// <reference types="cypress" />

import './commands';

// Configure Chai to work properly with Cypress
declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands here if needed
    }
  }
}

// Suppress ResizeObserver errors that can occur in tests
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('ResizeObserver')) {
    return false;
  }
  return true;
});
