import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SettingsHeader from "../../components/headerBar/index";

const Settings = ({ navigation, logout }) => {
    const onGoBack = () => navigation.goBack()
    const onLogout = () => logout()

    return (
        <SafeAreaView>
            <SettingsHeader goBack={onGoBack} />
            <View>
                <TouchableOpacity onPress={onLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({})