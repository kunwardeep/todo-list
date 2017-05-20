import TodoTextBox from './TodoTextBox/TodoTextBox';
import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

import TodoItem from './TodoItem/TodoItem';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    const { todos } = this.props;
    return (
    <div>
      <TodoTextBox/>
      { todos.length > 0 && todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, null)(App);
