import { connect } from 'react-redux';
import Home from './home';

// Get State
const mapStateToProps = (state) => {
    const user = state.user.userStore;
    const task = state.tasks.tasks;
    return {task, user}
};

// Conexion de componente con Redux

export default connect(mapStateToProps, null)(Home)
