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

const SignUp = (props) => {
  const test = "# Have an account? **Log in**"
  const { navigation } = props

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  }

  const handleLogIn = () => {
    navigation.navigate("LogIn");
  }
  
  const handleSignUp = () => {
    alert("[handleSignUp]");
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: .55, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            resizeMode={"contain"}
            source={images.LOGO}
            style={styles.images}
          />
        </View>
        <View style={{ flex: .45, padding: 10 }}>

          <CHTextInput placeholder={"Email"} style={styles.textInputStyle} />
          <CHTextInput placeholder={"Full Name"} style={styles.textInputStyle} />
          <CHTextInput placeholder={"Password"} style={styles.textInputStyle} />
          <CHTextInput placeholder={"Confirm Password"} style={styles.textInputStyle} />

          <CHButtonGeneric 
            style={styles.containerNewAccount} 
            text={"Sign-Up"}
            onPress={handleSignUp}
          />

          <View style={styles.containerNewAccount}>
            <Pressable onPress={handleLogIn}>
              <Markdown rules={rules}>{test}</Markdown>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp;

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
