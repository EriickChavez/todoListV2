import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import Logout from './logout';
import { logout } from '../../redux/action/user-action';

// Get State
const mapStateToProps = (state) => {
    return {}
};

// Conexion de componente con Redux
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        logout
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Logout)
