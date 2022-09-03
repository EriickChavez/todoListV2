// Ejemplo de redux

import { Text, View } from 'react-native'
import React, { Component } from 'react'

const Index = () => {
    return (
        <View>
            <Text>Index</Text>
        </View>
    )
}


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, removeTodo, checkedTask } from "./redux/task/actions";

// Get State
const mapStateToProps = (state) => {
    const { todosList } = state.todosReducers;
    return { todosList }
};
// Set State
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addTodo,
        removeTodo,
        checkedTask
    }, dispatch)
);
// Conexion de componente con Redux
export default connect(mapStateToProps, mapDispatchToProps)(Index)