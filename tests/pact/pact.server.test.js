const verifier = require('pact').Verifier;
const path = require('path');

const server = require('../resources/server');

server.start('localhost', 5051, 'http://localhost:3000');

// Verify that the provider meets all consumer expectations
describe('Pact Verification', () => {
  it('should validate the expectations of todo-api', function() { // lexical binding required here
    const opts = {
      provider: 'todos-api',
      providerBaseUrl: 'http://localhost:5051',
      // providerStatesSetupUrl: 'http://localhost:5050/todos',
      // Fetch pacts from broker
      // pactBrokerUrl: 'https://test.pact.dius.com.au/',
      // Specific Remote pacts (doesn't need to be a broker)
      // pactUrls: ['https://test.pact.dius.com.au/pacts/provider/Animal%20Profile%20Service/consumer/Matching%20Service/latest'],
      // Local pacts
      pactUrls: [path.resolve(process.cwd(), './tests/pact/contracts/todos-ui-todos-api.json')],
      // publishVerificationResult: true,
      providerVersion: '2.0.0'
    };

    return verifier.verifyProvider(opts);
  });
});
