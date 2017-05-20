import { combineReducers } from 'redux';

function todos(state = [], action) {
  switch (action.type) {
    case 'REQUEST_TODOS_COMPLETE':
      return [...state, ...action.payload];
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  todos
});

export default rootReducer;
