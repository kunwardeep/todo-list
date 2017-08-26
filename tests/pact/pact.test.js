const pact = require('pact');
const path = require('path');
const expect = require('chai').expect;
import todosApi from '../../src/api/api.js';

describe('The Todos API', () => {
  const port = 5050;

  const provider = pact({
    port,
    log: path.resolve(process.cwd(), 'tests/pact/pact-server.log'),
    dir: path.resolve(process.cwd(), 'tests/pact/contracts'),
    spec: 2,
    consumer: 'todos-ui',
    provider: 'todos-api'
  });

  const EXPECTED_BODY = [
    {
      id: 1,
      item: 'blah 01',
      completed: false
    },
    {
      id: 2,
      item: 'blah 02',
      completed: false
    }
  ];

  before(() => provider.setup());

  after(() => provider.finalize());

  describe('works', () => {
    before(() => {
      const interaction = {
        state: 'i have a list of todos',
        uponReceiving: 'a request for todos',
        withRequest: {
          method: 'GET',
          path: '/todos',
          headers: { 'content-type': 'application/json' }
        },
        willRespondWith: {
          status: 200,
          body: EXPECTED_BODY
        }
      };
      return provider.addInteraction(interaction);
    });

    it('returns the correct response', () => {
      return todosApi.getAllTodos()
        .then(allTodos => {
          return expect(allTodos).to.eql(EXPECTED_BODY);
        })
        .catch(err => {
          throw err;
        });
    });

    // verify with Pact, and reset expectations
    it('successfully verifies', () => provider.verify());
  });
});
