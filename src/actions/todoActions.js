const REQUEST_TODOS = 'REQUEST_TODOS';
export const REQUEST_TODOS_COMPLETE = 'REQUEST_TODOS_COMPLETE';
export const SET_TODOS = 'SET_TODOS';
const uuidV4 = require('uuid/v4');

import todosApi from '../api/api.js';

const requestTodos = () => ({
  type: REQUEST_TODOS
});

const requestTodosComplete = todos => ({
  type: REQUEST_TODOS_COMPLETE,
  payload: todos
});

const todoObj = item => ([{
  id: uuidV4(),
  item,
  completed: false
}]);

export const setTodo = todo => ({
  type: SET_TODOS,
  payload: todoObj(todo)
});

const todos = () => dispatch => {
  dispatch(requestTodos());

  return todosApi.getAllTodos()
    .then(allTodos => {
      return dispatch(requestTodosComplete(allTodos));
    })
    .catch(error => {
      throw (error);
    });
};

export default todos;
