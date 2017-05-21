const REQUEST_TODOS = 'REQUEST_TODOS';
export const REQUEST_TODOS_COMPLETE = 'REQUEST_TODOS_COMPLETE';
export const SET_TODOS = 'SET_TODOS';
export const SET_TODO_COMPLETE = 'SET_TODO_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';

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

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
});

export const setComplete = id => ({
  type: SET_TODO_COMPLETE,
  payload: id
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
