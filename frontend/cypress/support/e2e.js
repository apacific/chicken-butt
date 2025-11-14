// Import commands.js using ES2015 syntax:
import './commands';

// Suppress ResizeObserver errors that can occur in tests
const resizeObserverError = () => {
  const message = 'Failed to execute "observe" on "ResizeObserver": parameter 1 is not of type "Element".';
  // Ignore the error - it's a known issue with Cypress and ResizeObserver
  cy.on('uncaught:exception', (err) => {
    if (err.message.includes('ResizeObserver')) {
      return false;
    }
  });
};

resizeObserverError();
