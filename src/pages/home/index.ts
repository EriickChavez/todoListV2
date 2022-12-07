import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../redux/action/user-action';

// Get State
const mapStateToProps = (state) => {
    const user = state.user.userStore;
    const task = state.tasks.tasks;
    return { task, user }
};

// Conexion de componente con Redux
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        logout
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Home)
