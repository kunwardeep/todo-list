import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setComplete, deleteTodo } from '../../actions/todoActions';

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

export const mapDispatchToProps = dispatch => ({
  onComplete: evt => {
    dispatch(setComplete(evt.target.id));
  },
  onDelete: evt => {
    dispatch(deleteTodo(evt.target.id));
  }
});

export default connect(null, mapDispatchToProps)(TodoItem);
