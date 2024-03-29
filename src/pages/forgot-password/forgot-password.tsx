import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../../common/colors'

import { Dimensions } from "react-native";
import CHTextInput from "../../common/CHTextInput/CHTextInput";
import CHButtonGeneric from "../../common/CHButtonGeneric/CHButtonGeneric";
import { images } from '../../common/images';

const dim = Dimensions.get('screen')

type Props = {}

const ForgotPassword = (props:Props) => {
  
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
          <CHTextInput placeholder={"Password"} style={styles.textInputStyle} />
          <CHTextInput placeholder={"Confirm Password"} style={styles.textInputStyle} />
          <CHButtonGeneric
            style={styles.containerNewAccount} 
            uppercase
            text={"change password"}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ForgotPassword

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
