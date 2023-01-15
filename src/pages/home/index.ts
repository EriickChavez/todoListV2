import Home from './home';
import { ThunkDispatch, bindActionCreators, Action } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { IRootState } from "../../redux/reducer";
import { tasksRequest } from '../../redux/action/task-action';

// Get State
const mapStateToProps = (state: IRootState) => {
    const user = state.user.userStore.userLogged
    const task = state.tasks.tasks;
    return { task, user }
};

// Conexion de componente con Redux
const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, Action>) => (
    bindActionCreators({
        tasksRequest,
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Home)
