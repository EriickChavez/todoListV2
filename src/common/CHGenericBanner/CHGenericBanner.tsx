import React from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";

const CHGenericBanner = ({ username = '', text = '' }) => {
    const greeting = username.length > 0
        ? username + " Have a nice day"
        : text.length > 0
            ? text
            : 'Have a nice day';

    return (
        <View style={{
            borderRadius: 5,
            padding: 10,
            justifyContent: 'center',
            backgroundColor: '#F79E89',
            marginVertical: 10
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{
                    marginHorizontal: 10
                }}>
                    <Image
                        style={{
                            width: 25,
                            height: 25,
                        }}
                        source={require('../../static/images/greeting.png')}
                    />
                </View>
                <Text style={{ color: '#FFFFFF' }}>
                    {greeting}
                </Text>
            </View>
        </View>
    )
}

export default CHGenericBanner;

