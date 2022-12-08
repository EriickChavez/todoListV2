import Settings from "./settings";
import { Action, bindActionCreators, ThunkDispatch } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { logout } from '../../redux/action/user-action';
import { IRootState } from "../../redux/reducer";


// Get State
const mapStateToProps = (state: IRootState) => {
    return {}
};

// Conexion de componente con Redux
const mapDispatchToProps = (dispatch: ThunkDispatch<any, never, Action>) => (
    bindActionCreators({
        logout //: () => dispatch(logout())
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Settings)
