/* eslint-disable no-console */
const axios = require('axios');
const mockServerAddr = 'http://localhost:5050';

const http = axios.create({
  baseURL: mockServerAddr,
  headers: { 'content-type': 'application/json' }
});

class TodosApi {
  static getAllTodos() {
    return http.get(`/todos`)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(`Errors---${error}`);
      });
  }
}

export default TodosApi;
