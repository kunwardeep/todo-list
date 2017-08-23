import TodoItem from './TodoItem';
import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import chai from 'chai';
const expect = chai.expect;

const createMockStore = (initialState = {}) =>
  configureMockStore()(initialState);

describe('<TodoItem />', () => {
  let todo;
  beforeEach(() => {
    todo = {
      id: 1,
      item: 'blah 01',
      completed: false
    };
  });

  const createComponent = () => {
    const props = {
      todo
    };
    return mount(<TodoItem {...props} />, { context: { store: createMockStore({}) } });
  };

  it('delete button exists', () => {
    const wrapper = createComponent();
    const todoItem = wrapper.find('[data-automation-id="btnDelete"]');
    expect(todoItem.length).to.equal(1);
  });

  it('has prop onSubmit', () => {
    const wrapper = createComponent();
    const todoItem = wrapper.find('[data-automation-id="btnDelete"]');
    expect(todoItem.props().onClick).to.be.a('function');
  });
});
