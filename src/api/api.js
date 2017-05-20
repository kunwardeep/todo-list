const delay = 4000;

const todos = [
  {
    id: '1',
    item: 'blah 01',
    completed: 'false'
  },
  {
    id: '2',
    item: 'blah 02',
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
