import { connect } from 'react-redux';
import Routes from './routes'
// Get State
const mapStateToProps = (state) => {
    const { user } = state;
    return { user }
};


export default connect(mapStateToProps)(Routes)