import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../svg'
import { colors } from '../colors'

export type Props = {
    name?: string,
    size?: Number,
    color?: string,
    style?: Object,
    button?: boolean,
    onPress?: () => null
}

const CHFloatingButton = () => {
    return (
        <View style={styles.container}>
            <Icon name='plus' size={25} color={colors.WHITE} />
        </View>
    )
}

export default CHFloatingButton

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: '#F76C6A',
        borderRadius:100,
        position:'absolute',
        bottom:15,
        right:15,
        justifyContent:'center',
        alignItems:'center'
    }
})