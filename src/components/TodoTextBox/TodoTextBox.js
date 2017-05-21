import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class TodoTextBox extends Component {

  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          onSubmit(e);
        }}>
          Enter Todo Item: <input type="text"/>
          <input type="submit" value="add"/>
        </form>
      </div>
    );
  }
}

TodoTextBox.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TodoTextBox;
