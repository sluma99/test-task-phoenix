# Personal Todo List - Automation Tests

Automated tests for the web application [Personal Todo List](https://todotest.site/).

This repository contains automated tests for the **Personal Todo List** app, including:

- UI tests (authentication, Kanban board functionality)
- API tests (CRUD operations for tasks)

All tests are implemented using **Playwright** with **TypeScript**.

## Installation

Clone the repository:

```bash
git clone <YOUR_REPO_URL>
cd test-task-phoenix
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root of the project with the following content:

```
EMAIL=test@gmail.com
PASSWORD=12345678
BASE_URL=https://todotest.site
```

These credentials are used for logging into the application during automated tests.

## Running Tests

Run all tests (UI + API):

```bash
npx playwright test
```

Or using the npm script:

```bash
npm run test:all
```

Run only UI tests:

```bash
npx playwright test --project=chromium
```

Or:

```bash
npm run test:ui
```

Run only API tests:

```bash
npx playwright test --project=api
```

Or:

```bash
npm run test:api
```

## Project Structure

```
test-task-phoenix/
├── api
│   ├── enums
│   ├── factories
│   ├── fixture
│   ├── tests
│   └── types
├── ui
│   ├── components
│   ├── data
│   ├── enum
│   ├── factories
│   ├── fixture
│   ├── flow
│   ├── pages
│   └── tests
├── playwright.config.ts
├── .env
├── package.json
├── README.md
└── test_cases.md
```

### Description of each folder/file:

- **api/**  
  Contains all files for API tests.

    - **enums/** – Enum values for API endpoints and constants.
    - **factories/** – Data factories for generating API test data.
    - **fixture/** – Playwright fixtures for API tests, including authentication setup.
    - **tests/** – API test specs for endpoints like login, CRUD operations on tasks.
    - **types/** – TypeScript interfaces and types for API request and response models.

- **ui/**  
  Contains all files for UI tests.

    - **components/** – Page components (smaller parts of pages like widgets or forms).
    - **data/** – Test data files for different UI scenarios.
    - **enum/** – Enum values for UI error messages and texts shown in the app.
    - **factories/** – Data factories for generating UI test data.
    - **fixture/** – Contains only Playwright fixtures for initialization in UI tests (e.g. pages, context).
    - **flow/** – Higher-level flows (e.g. reusable login flow, creating a task).
    - **pages/** – Page Object Model classes representing application pages.
    - **tests/** – UI test specs (e.g. login, dashboard).

- **playwright.config.ts** – Playwright configuration file, defining projects, baseURL, timeouts, reporters etc.

- **.env** – Environment variables for sensitive data like login credentials and base URL.

- **package.json** – NPM scripts and dependencies for running the tests.

- **README.md** – This documentation file.

- **test_cases.md** – A list of manual and automated test cases planned for the project.