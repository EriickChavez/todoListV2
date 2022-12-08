import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '../../common/svg'

interface IProps {
  goBack: Function
}

const headerBar = ({
  goBack = () => { }
}: IProps) => {

  const onPress = () => goBack()

  return (
    <View>

      <View style={styles.titleWrapper}>
        <Text style={styles.textTitle}>Settings</Text>
      </View>
      <View style={styles.back}>
        <TouchableOpacity
          onPress={onPress}
        >
          <Icon
            size={30}
            name="chevron-right"
            color={'#F76C6A'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default headerBar

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    left: 10,
    height: 30,
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#F76C6A'
  }
})