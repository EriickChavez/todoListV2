import { StyleSheet, Text, Image, TextInput, View, SafeAreaView, Pressable } from 'react-native'
import React, { Children } from 'react'
import { colors } from '../../common/colors'

import { Dimensions } from "react-native";
import CHTextInput from "../../common/CHTextInput/CHTextInput";
import CHButtonGeneric from "../../common/CHButtonGeneric/CHButtonGeneric";
import { images } from '../../common/images';
import Markdown, { getUniqueID } from 'react-native-markdown-renderer';

const dim = Dimensions.get('screen')

const rules = {
  heading1: (_, children) => {
    return (
      <Text key={getUniqueID()} style={styles.textForgotPass}>
        {children}
      </Text>
    )
  },
  strong: (_, children) => {
    return (
      <Text key={getUniqueID()} style={[styles.textForgotPass, { color: "#F79E89" }]}>{children}</Text>
    )
  }
}

const Login = (props) => {
  const test = "# Don't have an account? **Sign up**"
  const { navigation } = props

  

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  }

  const handleLogIn = () => {
    navigation.navigate("Home");
  }

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  }


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: .7, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            resizeMode={"contain"}
            source={images.LOGO}
            style={styles.images}
          />
        </View>
        <View style={{ flex: .3, padding: 10 }}>
          <CHTextInput placeholder={"Email"} style={styles.textInputStyle} />
          <CHTextInput placeholder={"Password"} style={styles.textInputStyle} />
          <View style={styles.containerForgotPass}>
            <Pressable onPress={handleForgotPassword}>
              <Text style={styles.textForgotPass}>Forgot Password?</Text>
            </Pressable>
          </View>
          <CHButtonGeneric
            onPress={handleLogIn}
            style={styles.textInputStyle}
            text={"Log-in"}
          />
          <View style={styles.containerNewAccount}>
            <Pressable onPress={handleSignUp}>
              <Markdown rules={rules}>{test}</Markdown>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  images: {
    width: dim.width * 0.4,
    height: dim.width * 0.4,
  },
  textInputStyle: {
    marginVertical: 5
  },
  containerForgotPass: {
    flexDirection: 'row-reverse',
    marginBottom: 20
  },
  textForgotPass: {
    fontSize: 12,
    lineHeight: 14.63,
    textAlign: 'center',
    fontWeight: '400',
    color: '#27272780'
  },
  containerNewAccount: {
    marginTop: 15
  }
})
