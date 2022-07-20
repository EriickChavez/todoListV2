import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import CHTextInput from '../../common/CHTextInput/CHTextInput'
import { colors } from '../../common/colors'

export type Props = {
    name?: string,
    size?: Number,
    color?: string,
    style?: Object,
    button?: boolean,
    onPress?: () => null
}

const FullScreenTask = (props) => {

    const {id, title, description} = props.route.params
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.safeArea}>
                <CHTextInput
                    style={styles.input}
                    placeholder={id+" Title"}
                    placeholderTextColor={"#DDDDDD"}
                />

                <CHTextInput
                    style={[styles.input, styles.textArea]}
                    multiline={true}
                    placeholder={id+" Description"}
                    placeholderTextColor={"#DDDDDD"}
                />

                <View style={[styles.input, styles.inputDate, styles.inputActive]}>
                    <Text style={styles.textActive}>
                        Deadline (optional)
                    </Text>
                </View>
                <View style={[styles.input, styles.inputDate, styles.inputInactive]}>
                    <Text style={styles.textInactive}>
                        Add Image (optional)
                    </Text>
                </View>
                <View style={[styles.input, styles.button]}>
                    <Text style={styles.textButton}>
                        Add Image (optional)
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F79E89',
        padding: 15,
    },
    input: {
        borderColor: colors.WHITE,
        color: colors.WHITE,
        borderWidth: 2,
        marginBottom: 20,
    },
    inputDate: {
        padding: 10,
        borderRadius: 7,
        flexDirection: 'row'
    },
    button: {
        padding: 10,
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE
    },
    textButton: {
        color: '#F79E89',
        fontWeight: '500',
        fontSize: 14,
    },
    inputActive: { borderColor: colors.WHITE },
    inputInactive: { borderColor: '#FBCEC4' },
    textActive: { color: colors.WHITE },
    textInactive: { color: '#FBCEC4' },
    textArea: {
        minHeight: 400,
    }
})


export default FullScreenTask;