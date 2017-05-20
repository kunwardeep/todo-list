import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem/TodoItem';

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps, null)(TodoItem);
