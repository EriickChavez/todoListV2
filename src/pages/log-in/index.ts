import { connect } from 'react-redux';
import { Action, bindActionCreators, ThunkDispatch } from '@reduxjs/toolkit';
import Login from './Login';
import { newUser, loginRequest, loginType } from "../../redux/action/user-action";
import UserModel from '../../models/UserModel';
import { IRootState } from '../../redux/reducer';

const mapStateToProps = (state: IRootState) => {
    return state.tasks;
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, Action>) => (

    bindActionCreators({
        newUser, //: (user: UserModel) => dispatch(newUser(user)),
        loginRequest //: (user: loginType) => dispatch(loginRequest(user)),

    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Login)
