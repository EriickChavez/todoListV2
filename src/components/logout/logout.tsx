import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '../../common/svg'
import { colors } from '../../common/colors'

const index = ({
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name='log-out' size={25} color={colors.WHITE} />
        </TouchableOpacity>
    )
}

export default index

const styles = StyleSheet.create({})



