import TodoTextBox from './TodoTextBox/TodoTextBox';
import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

import TodoItem from './TodoItem/TodoItem';
import { connect } from 'react-redux';
import { setTodo } from '../actions/todoActions';

class App extends Component {
  render() {
    const { todos, onSubmit } = this.props;
    return (
    <div>
      <TodoTextBox onSubmit={onSubmit}/>
      { todos.length > 0 && todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: evt => {
    dispatch(setTodo(evt.target.querySelector('input').value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
