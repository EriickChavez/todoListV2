import { connect } from 'react-redux';
import Routes from './routes'
// Get State
const mapStateToProps = (state) => {
    const { userStore } = state.user;
    return { user: userStore }
};


export default connect(mapStateToProps)(Routes)