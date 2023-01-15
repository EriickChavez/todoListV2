import FullScreenTask from './fullScreen-tasks';

import { connect } from 'react-redux';
import { addTask, editTask } from "../../redux/action/task-action";
import { ThunkDispatch, bindActionCreators, Action } from '@reduxjs/toolkit';
import TaskModel from '../../models/TaskModel';
import { IRootState } from '../../redux/reducer';

const mapStateToProps = (state: IRootState) => {
    const user = state.user.userStore.userLogged
    return { user }
};

// Set State
const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, Action>) => (
    bindActionCreators({
        addTask, //: (task: TaskModel) => dispatch(addTask(task)),
        editTask //: (task: TaskModel) => dispatch(editTask(task)),
    }, dispatch)
);
// Conexion de componente con Redux

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenTask)
