import SignUp from './sign-up';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { newUser } from "../../redux/action/user-action";

const mapStateToProps = (state) => {
    return state.user;
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        newUser
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
