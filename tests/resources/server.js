/* eslint-disable no-console */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//eslint-disable-next-line
const router = express.Router();

const start = (host, port, corsAllowOrigin) => {
  console.log(`Starting up mock server on: http://${host}:${port}`);
  app.use(bodyParser.json());
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', corsAllowOrigin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });

  const todos = [
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
  router.get('/todos', (req, res) => {
    res.status(200).json(todos);
  });

  app.use('/', router);

  app.listen(port, () => {
    console.log(`Mock server listening on port ${port}!`);
  });
};

module.exports = {
  start
};

// start('localhost', 5050, 'http://localhost:3000');
