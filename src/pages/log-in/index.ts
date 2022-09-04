import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import { newUser } from "../../redux/action/user-action";

const mapStateToProps = (state) => {
    return state.tasks;
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        newUser
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
