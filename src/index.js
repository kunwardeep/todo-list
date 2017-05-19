import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import TodoItem from './components/TodoItem/TodoItem';
import TodoTextBox from './components/TodoTextBox/TodoTextBox';

function App() {
  return (
    <div>
      <TodoTextBox/>

      <TodoItem />
    </div>
  );
}

ReactDOM.render(
  <App />,
document.getElementById('app')
);
