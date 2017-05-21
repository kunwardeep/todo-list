import { combineReducers } from 'redux';
import { SET_TODOS, REQUEST_TODOS_COMPLETE } from '../actions/todoActions';
function todos(state = [], action) {
  switch (action.type) {
    case REQUEST_TODOS_COMPLETE:
    case SET_TODOS:
      console.log('STATE--', state);
      console.log('PAYLOAD--', action.payload);
      console.log('BOTH--', [...state, ...action.payload]);

      return [...state, ...action.payload];
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  todos
});

export default rootReducer;
