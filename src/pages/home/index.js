import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
import { addTodo, removeTodo, checkedTask } from "../../redux/task/actions";

// Get State
const mapStateToProps = (state) => {
    const { todosList } = state.todosReducers;
    return { todosList }
};
// Set State
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addTodo,
        removeTodo,
        checkedTask
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home)