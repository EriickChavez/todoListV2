import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CHToolbar from "../../common/CHToolbar/CHToolbar";
import Icon from '../../common/svg';
import Tasks from "../../components/home/tasks";
import FloatingButton from "../../common/CHFloatingButton";
import TaskModel from '../../models/TaskModel'

const Home = (props) => {
 const { navigation } = props;

  const [List, setList] = useState <TaskModel[]>([
    new TaskModel( "title 1", 'description 1', ),
    new TaskModel( "title 2", 'description 2', ),
    new TaskModel( "title 3", 'description 3', ),
    new TaskModel( "title 4", 'description 4', ),
  ])


  const _onPress = (id:string) => {
    alert("[id]"+id);
  }

  const showModalAddTask = () => {
    navigation.navigate("FullScreenTask");
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
            List.map((e, i) => (
              <Tasks 
                key={i} 
                index={i} 
                onPress={_onPress} 
                task={e}
                {...e}
              />
            ))
          }
        </ScrollView>
        <FloatingButton onPress={showModalAddTask} />
      </View>
    </SafeAreaView>
  )
}


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



export default Home