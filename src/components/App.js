import TodoTextBox from './TodoTextBox/TodoTextBox';
import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

import TodoItem from './TodoItem/TodoItem';
import { connect } from 'react-redux';
import { setTodo } from '../actions/todoActions';
import { setComplete, deleteTodo } from '../actions/todoActions';

class App extends Component {
  render() {
    const { todos, onAdd, onComplete, onDelete } = this.props;
    return (
    <div>
      <TodoTextBox onSubmit={onAdd}/>
      { todos.length > 0 && todos.map(todo => <TodoItem onComplete={onComplete} onDelete={onDelete} key={todo.id} todo={todo} />)}
    </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export const mapDispatchToProps = dispatch => ({
  onAdd: evt => {
    dispatch(setTodo(evt.target.querySelector('input').value));
  },
  onComplete: evt => {
    dispatch(setComplete(evt.target.id));
  },
  onDelete: evt => {
    dispatch(deleteTodo(evt.target.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
