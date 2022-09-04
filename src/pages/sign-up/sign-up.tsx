import { StyleSheet, Text, Image, TextInput, View, SafeAreaView, Pressable } from 'react-native'
import React, { Children, useState } from 'react'
import { colors } from '../../common/colors'

import { Dimensions } from "react-native";
import CHTextInput from "../../common/CHTextInput/CHTextInput";
import CHButtonGeneric from "../../common/CHButtonGeneric/CHButtonGeneric";
import { images } from '../../common/images';
import Markdown, { getUniqueID } from 'react-native-markdown-renderer';

const dim = Dimensions.get('screen')
const test:string = "# Have an account? **Log in**"


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
  
  const { navigation, newUser } = props
  
  const [username, setUsername] = useState<string>('');
  const [pass, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const [hasPassError, setHasPassError] = useState<boolean>(false);

  const handleLogIn = () => navigation.navigate("LogIn") 
  const handleSignUp = () => { 
    !hasPassError && pass !== confirmPass && setHasPassError(true)


    
    if(hasPassError || username.trim() == '' || pass.trim() == ''){
      return alert('Please fill Fields');
    }

    const tmp_user = {
      username, 
      password: pass
    };
    return newUser(tmp_user)
  }

  const onChangeUsername = (text:string) => setUsername(text)
  const onChangePassword = (text:string) => setPassword(text)

  const onChangePassConfirm = (text:string) => {
    setHasPassError(false)
    setConfirmPass(text)
  }

  const onSubmitEditing = () => {
    if(pass !== confirmPass){
      setHasPassError(true)
    };
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

          <CHTextInput 
            onChangeText={onChangeUsername}
            placeholder={"Username"} 
            style={styles.textInputStyle} 
            />

          <CHTextInput 
            onChangeText={onChangePassword}
            placeholder={"Password"} 
            style={styles.textInputStyle} 
            />

          <CHTextInput 
            onChangeText={onChangePassConfirm}
            placeholder={"Confirm Password"} 
            onSubmitEditing={onSubmitEditing}
            style={styles.textInputStyle} 
            />
            { hasPassError && <View>
              <Text style={styles.errorPass}>The password confirmation does not match</Text>
            </View>}

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
  },
  errorPass:{
    color: '#FF0000'
  }
})
