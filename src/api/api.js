const delay = 2000;

const todos = [
  {
    id: '1',
    item: 'Building Applications in React and Flux',
    completed: 'false'
  },
  {
    id: '2',
    item: 'Building Applications in React and Flux',
    completed: 'false'
  }
];

class TodosApi {
  static getAllTodos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], todos));
      }, delay);
    });
  }

}

export default TodosApi;
