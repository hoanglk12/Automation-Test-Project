# Automation-Test-Project

This project implements automated testing for the Facebook.com website using Playwright and GitHub Actions CI/CD.

## Project Structure

- `tests/`: Contains test cases
- `.github/workflows/`: CI/CD pipeline configuration
- `playwright.config.js`: Playwright configuration

## Installation and Local Execution

### Requirements
- Node.js (v14 or higher)
- Git

### Installation Steps
1. Clone the repository:
git clone https://github.com/hoanglk12/Automation-Test-Project.git
cd Automation-Test-Project


3. Install dependencies:
npm install
npx playwright install


4. Run tests:
npx playwright test


5. View the report:
npx playwright show-report


## CI/CD Pipeline

The pipeline is configured to run automatically when changes are pushed to the `main` branch.

### Pipeline Stages:

1. **Checkout**: Fetch source code from the repository
2. **Build**: Install dependencies and Playwright
3. **Test**: Run automated test cases
4. **Report**: Generate and store test results report

### Viewing Pipeline Results:

1. Go to the "Actions" tab in the GitHub repository
2. Select the most recent workflow run
3. Download the "playwright-report" artifact to view the detailed report

## Test Cases

The project includes both positive and negative test cases:

### Positive Tests:
- Checking Facebook homepage loading
- Verifying login form display
- Checking account creation option

### Negative Tests:
- Verifying that a non-existent element is not found -> Btn 'Sign Up' NOT shown when login
- Checking error message when logging in with an empty email


## Report Explanation

The HTML report generated after running tests includes:
- Overview of results (number of passes/failures)
- Execution time for each test
- Screenshots for failed tests
- Logs and detailed information

## Contact

If you have any questions, please contact via email: hoanglk12@gmail.com
