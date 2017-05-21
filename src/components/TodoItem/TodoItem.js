import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TodoItem extends Component {
  render() {
    const { todo, onComplete, onDelete } = this.props;
    return (
    <div >
      <div>
        <button onClick={e => {
          e.preventDefault();
          onComplete(e);
        }}
          id={todo.id}>
          {todo.item} , {todo.completed.toString()}
        </button>

        <button onClick={e => {
          e.preventDefault();
          onDelete(e);
        }}
          id={todo.id}>
          X
        </button>
      </div>

    </div>);
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoItem;
