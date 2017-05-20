export const REQUEST_TODOS = 'REQUEST_TODOS';
export const REQUEST_TODOS_COMPLETE = 'REQUEST_TODOS_COMPLETE';
import todosApi from '../api/api.js';

const requestTodos = () => ({
  type: REQUEST_TODOS
});

const requestTodosComplete = todos => ({
  type: REQUEST_TODOS_COMPLETE,
  payload: todos
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
