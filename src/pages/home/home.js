import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import CHToolbar from "../../common/CHToolbar/CHToolbar";
import Icon from '../../common/svg';
import Tasks from "../../components/home/tasks";
import FloatingButton from "../../common/CHFloatingButton";

const home = ({navigation}) => {
  const [list, setList] = React.useState([{ id:1, title: "title", description: 'description' },{ id:2, title: "title", description: 'description' },{ id:3, title: "title", description: 'description' },{ id:4, title: "title", description: 'description' },])
  const _onPress = (id) => {
    console.log("[id]", id);
    navigation.navigate("FullScreenTask",{...list[id]});
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.safeArea}>
        <CHToolbar settings />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Icon name={"dashboard"} color={"#F76C6A"} button={true} size={24} />
              <Text style={styles.titleSection}>List of todo</Text>
            </View>
            <Icon name={"filter"} color={"#F76C6A"} button={true} size={34} />
          </View>
          {
          list.map((e, i) => <Tasks key={i} index={i} title={e.title} onPress={_onPress} description={e.description} />)}
        </ScrollView>
        <FloatingButton />
      </View>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleSection: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#F76C6A',
    marginHorizontal: 15,
  }
})



