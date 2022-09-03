import FullScreenTask from './fullScreen-tasks';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, editTask } from "../../redux/action/task-action";

// Set State
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        addTask,
        editTask
    }, dispatch)
);
// Conexion de componente con Redux

export default connect(null, mapDispatchToProps)(FullScreenTask)
