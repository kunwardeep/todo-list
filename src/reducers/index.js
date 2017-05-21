import { combineReducers } from 'redux';
import { SET_TODOS, REQUEST_TODOS_COMPLETE, SET_TODO_COMPLETE, DELETE_TODO } from '../actions/todoActions';

function todos(state = [], action) {
  switch (action.type) {
    case REQUEST_TODOS_COMPLETE:
    case SET_TODOS:
      return [...state, ...action.payload];
    case SET_TODO_COMPLETE:
      return state.map(todo => {
        if (todo.id.toString() === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case DELETE_TODO :
      return state.filter(todo => {
        return todo.id.toString() !== action.payload ? todo : null;
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos
});

export default rootReducer;
