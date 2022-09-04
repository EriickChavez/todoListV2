import { connect } from 'react-redux';
import Home from './home';

// Get State
const mapStateToProps = (state) => {
    return state.tasks
};

// Conexion de componente con Redux

export default connect(mapStateToProps, null)(Home)
