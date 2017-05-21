import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
    <div >
      <label id={todo.id}>{todo.item} , {todo.completed.toString()}</label>
    </div>)
    ;
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
