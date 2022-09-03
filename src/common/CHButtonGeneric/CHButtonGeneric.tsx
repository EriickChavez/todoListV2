import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'

interface ButtonGenericProps {
    BG_Color: string,
    style: {},
    TXT_Color: string,
    text: string,
    uppercase: boolean
}


const ButtonGeneric = (props:ButtonGenericProps) => {
    const {
        BG_Color,
        style,
        TXT_Color,
        text,
        uppercase
    } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            {...props}
            style={[styles.buttonGenericStyles, style, { backgroundColor: BG_Color }]}>
            <Text style={{ color: TXT_Color }}>{uppercase ? text.toUpperCase() : text}</Text>
        </TouchableOpacity>
    )
}

ButtonGeneric.propTypes = {
    style: PropTypes.object,
    BG_Color: PropTypes.string,
    TXT_Color: PropTypes.string,
    text: PropTypes.string,
    uppercase: PropTypes.bool,
    onPress: PropTypes.func
}
ButtonGeneric.defaultProps = {
    style: {},
    BG_Color: '#F79E89',
    TXT_Color: 'white',
    uppercase: false,
    text: "",
    onPress: () => {}
}

const styles = StyleSheet.create({
    buttonGenericStyles: {
        padding: 10,
        borderRadius: 7,
        borderColor: '#27272780',
        alignItems: 'center'
    }
})


export default ButtonGeneric
