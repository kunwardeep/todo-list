import TodoItem from './TodoItem';
import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

function debug(wrapper) {
  const html = wrapper.html();
  // do something cool with the html
  return html;
}

chai.use(chaiEnzyme(debug));
const expect = chai.expect;

const createMockStore = (initialState = {}) =>
  configureMockStore()(initialState);

describe('<TodoItem />', () => {
  let onDeleteResponse, deleteCalled, todo;

  beforeEach(() => {
    deleteCalled = false;
    onDeleteResponse = Promise.resolve();
    todo = {
      id: 1,
      item: 'blah 01',
      completed: false
    };
  });

  const createComponent = () => {
    const props = {
      todo,
      onDelete: () => {
        deleteCalled = true;
        console.log('oooooyaaahh');
      }
    };

    return mount(<TodoItem {...props} />, { context: { store: createMockStore({}) } });
  };

  it('delete button exists', () => {
    const wrapper = createComponent();
    const todoItem = wrapper.find('[data-automation-id="btnDelete"]');
    console.log(todoItem.html());
    expect(todoItem.length).to.equal(1);
  });
  it('onDelete is called', () => {
    const wrapper = createComponent();
    const todoItem = wrapper.find('[data-automation-id="btnDelete"]');
    todoItem.simulate('click');
    expect(deleteCalled).to.equal(true);
  });
});
