import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../common/colors'
import Icon from '../../common/svg'
import TaskModel from '../../models/TaskModel'

export type Props = {
  task: TaskModel
  index?: number,
  onPress?: Function
}

const Tasks: React.FC<Props> = ({
  task,
  index = 0,
  onPress = () => null,
}) => {
  const { 
    id,
    title,
    description,
    deadline,
    URLImage,
    type,
    createdAt
  } = task;


  const dateFormat = (date: Date) => date.toDateString()

  return (
    <Pressable
      onPress={() => onPress(id)}
      style={[styles.container, index % 2 == 0 ? styles.color1 : styles.color2]}>
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.title}>{ title }</Text>
        <Icon name={'clock'} button size={24} color={"#FFFFFF"} />
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {
          /* Borrar esta linea */
          "ID: " + id + " - "
        }
        {description}
      </Text>

      <View>
        <Text style={styles.createdAt}>
          Created At {dateFormat(new Date(createdAt))}
        </Text>
      </View>
    </Pressable>
  )
}

export default Tasks

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 12,
    minHeight: 100,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.WHITE,
    fontWeight: '700',
    fontSize: 20,
    width: '80%'
  },
  description: {
    color: colors.WHITE,
    fontWeight: '400',
    fontSize: 14,
    width: '100%'
  },
  createdAt: {
    marginTop: 20,
    color: colors.WHITE,
    fontWeight: '400',
    fontSize: 12,
    width: '100%'
  },
  color1: {
    backgroundColor: '#F76C6A',
    borderColor: '#F76C6A',
  },
  color2: {
    backgroundColor: '#F79E89',
    borderColor: '#F79E89',
  },
})
