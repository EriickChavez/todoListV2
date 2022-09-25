import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import CHToolbar from "../../common/CHToolbar/CHToolbar";
import Icon from '../../common/svg';
import Tasks from "../../components/home/tasks";
import FloatingButton from "../../common/CHFloatingButton";
import TaskModel from '../../models/TaskModel'
import UserModel from '../../models/UserModel'
import CHGenericBanner from '../../common/CHGenericBanner/CHGenericBanner';

const Home = (props) => {
  const { navigation } = props;
  
  const Lista:TaskModel[] = useMemo(()=> props.task, [props])
  const User:UserModel = useMemo(()=> props.user.userLogged, [props])

  const _onPress = (id:string) => { }
  const _onLongPress = (id:string) => {
    const taskPressed = Lista.findIndex(task => task.id == id)
    navigation.navigate("FullScreenTask", { task: Lista[taskPressed] });
  }

  const showModalAddTask = () => {
    navigation.navigate("FullScreenTask",{task:null});
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
          <CHGenericBanner />
          {
            Lista.map((e:TaskModel, i:number) => (
              <Tasks 
                key={i} 
                index={i} 
                onLongPress={_onLongPress}
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
