import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const CHTextInput = (props) => {
    const {style} = props;
    return (
        <TextInput
            {...props}
            style={[styles.textInputStyles, style]}
        />
    )
}
CHTextInput.propTypes = {
    style: PropTypes.object,
}
CHTextInput.defaultProps = {
    style: {}
}


export default CHTextInput

const styles = StyleSheet.create({
    textInputStyles: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        borderColor: '#27272780'
    }
})