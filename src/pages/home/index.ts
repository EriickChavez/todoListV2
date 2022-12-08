import Home from './home';
import { ThunkDispatch, bindActionCreators, Action } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { logout } from '../../redux/action/user-action';
import { IRootState } from "../../redux/reducer";

// Get State
const mapStateToProps = (state: IRootState) => {
    const user = state.user.userStore
    const task = state.tasks.tasks;
    return { task, user }
};

// Conexion de componente con Redux
const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, Action>) => (
    bindActionCreators({
        logout//: () => dispatch(logout())
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Home)
