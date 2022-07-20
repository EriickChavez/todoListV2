import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropType from 'prop-types'
import Icon from "../svg/index";

const CHToolbar = ({
    title,
    settings,
    trash,
    edit,
    clock,
    back
}) => {

    const renderTitle = () => {
        return (
            <View style={styles.title}>
                <Text style={styles.title}>{title.toUpperCase()}</Text>
            </View>
        )
    }
    const renderTrash = () => {
        return (
            <View style={styles.trash}>
                <Icon size={24} name={"book-open"} button={true} />
            </View>
        )
    }
    const renderSettings = () => {
        return (
            <View style={styles.settings}>
                <Icon size={24} name={"settings"} button={true} />
            </View>
        )
    }
    const renderEdit = () => {
        return (
            <View style={styles.edit}>
                <Icon size={24} name={"edit-2"} button={true} />
            </View>
        )
    }
    const renderClock = () => {
        return (
            <View style={styles.clock}>
                <Icon size={24} name={"clock"} button={true} />
            </View>
        )
    }
    const renderBack = () => {
        return (
            <View style={styles.back}>
                <Icon size={24} name={"chevron-left"} button={true} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                {back && renderBack()}
                {title && renderTitle()}
            </View>
            <View style={{ flexDirection: 'row' }}>
                {settings && renderSettings()}
                {trash && renderTrash()}
                {edit && renderEdit()}
                {clock && renderClock()}
            </View>
        </View>
    )
}

export default CHToolbar

CHToolbar.propTypes = {
    title: PropType.string,
    settings: PropType.bool,
    trash: PropType.bool,
    edit: PropType.bool,
    clock: PropType.bool,
    back: PropType.bool
}

CHToolbar.defaultProps = {
    title: "To Do List",
    settings: false,
    trash: false,
    edit: false,
    clock: false,
    back: false,
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: "#F79E89",
        fontSize: 20,
        fontWeight: 'bold'
    },
    settings: {
        width: 24,
        height: 24,
        marginHorizontal: 3
    },
    trash: {
        width: 24,
        height: 24,
        marginHorizontal: 3
    },
    edit: {
        width: 24,
        height: 24,
        marginHorizontal: 3
    },
    clock: {
        width: 24,
        height: 24,
        marginHorizontal: 3
    },
    back: {
        width: 24,
        height: 24,
        marginHorizontal: 3
    },
})