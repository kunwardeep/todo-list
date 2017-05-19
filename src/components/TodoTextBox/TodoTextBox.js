import React, { Component } from 'react';

class TodoTextBox extends Component {
  render() {
    return (
      <div>
        <form >
          Enter Todo Item: <input type="text"/>
          <input type="submit" value="add"/>
        </form>
      </div>
    );
  }
}

export default TodoTextBox;
