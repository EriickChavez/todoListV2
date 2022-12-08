import SignUp from './sign-up';
import { connect } from 'react-redux';
import { ThunkDispatch, bindActionCreators, Action } from '@reduxjs/toolkit';


import { newUser } from "../../redux/action/user-action";
import { IRootState } from '../../redux/reducer';
import UserModel from '../../models/UserModel';

const mapStateToProps = (state: IRootState) => {
    return state.user;
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, Action>) => (

    bindActionCreators({
        newUser //: (user: UserModel) => dispatch(newUser(user)),
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
