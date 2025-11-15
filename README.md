<img width="680" src="https://github.com/apacific/chicken-butt/blob/main/Chicken-Butt_logo.png?raw=true" />  

# About
Proof of concept for a restaurant management application to display food and beverage menus, enable customers to place and complete orders, and help manage inventory.

<img src="https://github.com/apacific/chicken-butt/blob/main/Chicken-Butt_demo.gif?raw=true" />

## Features

- next.js frontend
- responsive design
- java backend
- postgres database
- comprehensive automated testing
- user-friendly aesthetic

# Setup
- Clone this project.
- Ensure your Docker engine is running via [Docker Desktop or Docker CLI](https://docs.docker.com/).
- In a BASH or PowerShell terminal, navigate to the project root directory.
- Run the following command:
`docker compose up --build`
- Navigate to `localhost:3000` in your browser.

# Testing

## Test Architecture

This project includes a comprehensive test suite covering **unit**, **integration**, and **end-to-end (e2e)** tests:

### Frontend Tests (Jest + Testing Library)

**Location**: `frontend/__tests__/`

- **Unit tests** for utilities and components
  - `lib/groupMenu.test.ts` - Menu grouping logic
  - `components/HomeCard.test.tsx` - Component rendering and interactions
  - `app/api/menu/route.test.ts` - API route handler with mocked backend
  
- **Integration tests**
  - `lib/fetchMenu.test.ts` - Frontend fetching from API

**Run frontend tests**:
```bash
cd frontend
npm test                         # Run all tests
npm test -- --watch              # Watch mode
npm test -- --coverage           # Coverage report
```

### Backend Tests (JUnit + Spring Boot Test)

**Location**: `backend/src/test/java/`

- **MenuControllerTest** - REST endpoint validation
  - Verifies `/menu` returns seeded items with 200 status
  - Tests error handling and mapping

- **MenuRepositoryTest** - Database operations
  - CRUD operations with H2 in-memory database
  - Filtering by section and subsection

**Run backend tests**:
```bash
cd backend
mvn test                             # Run all tests
mvn test -Dtest=MenuControllerTest   # Run specific test class
mvn test -DskipTests=false           # Run with coverage
```

### End-to-End Tests (Cypress)

**Location**: `frontend/cypress/e2e/`

- **happy-path.cy.ts** - Full user journey
  - Load home page → navigate to FOOD/BEVERAGES
  - Enter subsections (chicken, sides, soft drinks, etc.)
  - Verify menu items and pricing from backend
  - Navigate between views and back buttons

**Run e2e tests**:
```bash
# Using docker-compose (recommended for full-stack testing):
docker-compose up -d                # Start all services (db, backend, frontend)
npm run test:e2e                    # Run Cypress tests (see below for npm scripts)

# Or locally with npm:
cd frontend
npm run dev                         # Terminal 1: Start frontend dev server
npx cypress open                    # Terminal 2: Interactive Cypress UI
npx cypress run                     # Terminal 2: Headless mode
```

## Testing Best Practices

- **Unit tests**: Focus on isolated logic (pure functions, components with mocked props)
- **Integration tests**: Test fetch calls and API interaction layer
- **E2E tests**: Use page objects or custom commands (see `cypress/support/commands.js`) for repeated flows
- **Selectors**: Prefer data attributes or stable text over fragile CSS selectors
- **Fixtures**: Use `cypress/fixtures/` for test data
- **Independence**: Each test should be isolated; clean up state between runs

## Test Configuration

### Jest
- Config: `frontend/jest.config.js`
- Setup: `frontend/jest.setup.ts`
- Environment: jsdom (for React component testing)
- TypeScript: Configured via ts-jest through next/jest

### Cypress
- Config: `frontend/cypress.config.ts`
- Base URL: http://localhost:3000
- Video recording: Enabled on failure
- Timeouts: 10s command, 30s page load

### Spring Boot Tests
- Profile: `test` (uses H2 in-memory database)
- Config: `backend/src/test/resources/application-test.properties`
- Framework: JUnit 5 + Spring Boot Test

## Docker & E2E

For complete integration testing with Docker:

```bash
# Build and start all services
docker-compose up -d

# Run Cypress tests against full stack
cd frontend && npx cypress run

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Tear down
docker-compose down
```

The Docker setup ensures:
- Backend at `http://backend:8080` (internal) or `http://localhost:8080` (local)
- Frontend at `http://localhost:3000`
- Postgres at `db:5432` (internal network)
- All services on shared network `appnet`
