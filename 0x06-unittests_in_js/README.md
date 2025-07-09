# JavaScript Unit Testing Project

This project demonstrates comprehensive unit testing in JavaScript using Mocha, Chai, and Sinon. It covers various testing concepts from basic unit tests to integration testing.

## Requirements

- Ubuntu 18.04
- Node.js 12.x.x
- All files end with a new line
- Code uses `.js` extension
- All tests pass without warnings when running \`npm run test *.test.js\`

## Testing Tools Used

- **Mocha**: JavaScript test framework
- **Chai**: BDD/TDD assertion library
- **Sinon**: Standalone test spies, stubs and mocks
- **Request**: HTTP client for integration testing

## Project Structure

### Basic Testing (Tasks 0-2)
- \`0-calcul.js\` & \`0-calcul.test.js\`: Basic function testing with Node's assert
- \`1-calcul.js\` & \`1-calcul.test.js\`: Enhanced function with type parameter
- \`2-calcul_chai.js\` & \`2-calcul_chai.test.js\`: Same tests using Chai assertions

### Advanced Testing Concepts (Tasks 3-7)
- \`utils.js\`: Utility module for testing
- \`3-payment.js\` & \`3-payment.test.js\`: Testing with Sinon spies
- \`4-payment.js\` & \`4-payment.test.js\`: Testing with Sinon stubs
- \`5-payment.js\` & \`5-payment.test.js\`: Using hooks (beforeEach/afterEach)
- \`6-payment_token.js\` & \`6-payment_token.test.js\`: Async testing with done callback
- \`7-skip.test.js\`: Skipping tests

### Integration Testing (Tasks 8-10)
- \`8-api/\`: Basic Express API testing
- \`9-api/\`: API testing with route parameters and regex validation
- \`10-api/\`: Advanced API testing with POST endpoints and deep equality

## Key Concepts Covered

1. **Unit Testing**: Testing individual functions in isolation
2. **Component Testing**: Testing React-like components
3. **Integration Testing**: Testing multiple units working together
4. **Spies**: Monitoring function calls without changing behavior
5. **Stubs**: Replacing function implementations for testing
6. **Hooks**: Setup and teardown for tests
7. **Async Testing**: Testing promises and async operations
8. **API Testing**: Testing HTTP endpoints
9. **Deep Equality**: Comparing complex objects
10. **Test Organization**: Using describe blocks and skipping tests

## Running Tests

### Individual Test Files
\`\`\`bash
npm test 0-calcul.test.js
npm test 1-calcul.test.js
npm test 2-calcul_chai.test.js
# ... and so on
\`\`\`

### API Tests (require running server)
For API tests (8-api, 9-api, 10-api), start the server first:
\`\`\`bash
cd 8-api
node api.js
# In another terminal
npm test api.test.js
\`\`\`

## Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run tests:
\`\`\`bash
npm test
\`\`\`

## Testing Best Practices Demonstrated

- **Descriptive test names**: Clear, specific test descriptions
- **Test organization**: Using describe blocks to group related tests
- **Edge case testing**: Testing boundary conditions and error cases
- **Mocking external dependencies**: Using stubs to isolate units under test
- **Async testing**: Proper handling of promises and callbacks
- **Integration testing**: Testing complete user flows
- **Test maintenance**: Using skip for temporarily broken tests

This project serves as a comprehensive guide to JavaScript testing, covering everything from basic assertions to complex integration scenarios.
