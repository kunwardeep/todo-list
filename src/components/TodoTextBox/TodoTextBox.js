import React, { Component } from 'react';
import { setTodo } from '../../actions/todoActions';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class TodoTextBox extends Component {

  render() {
    const { onAdd } = this.props;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          onAdd(e);
        }}>
          Enter Todo Item: <input type="text"/>
          <input type="submit" value="add"/>
        </form>
      </div>
    );
  }
}

TodoTextBox.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export const mapDispatchToProps = dispatch => ({
  onAdd: evt => {
    dispatch(setTodo(evt.target.querySelector('input').value));
  }
});
export default connect(null, mapDispatchToProps)(TodoTextBox);
