import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useMemo, useState } from 'react'
import CHTextInput from '../../common/CHTextInput/CHTextInput'
import CHButtonGeneric from '../../common/CHButtonGeneric/CHButtonGeneric'
import { colors } from '../../common/colors'
import { getUniqueID } from 'react-native-markdown-renderer'
import TaskModel from "../../models/TaskModel";
export type Props = {
    name?: string,
    size?: Number,
    color?: string,
    style?: Object,
    button?: boolean,
    idTask?: string,
    addTask?: () => null,
    editTask: () => null
}

const FullScreenTask = (props) => {
    const [task, setTask] = useState<TaskModel>( props.route.params.task || {id: getUniqueID(), title:'', description:''} );
    const isEdit = useMemo(()=> !!props.route.params.task,[props.route.params.task])
    const {id, title, description} = task;

    const onChangeTitle = (text:string) => {setTask({...task, title:text})}
    const onChangeDescription = (text:string) => {setTask({...task, description:text})}

    const onPress = () => {
        if(isEdit){
            /* EDIT */
            props.editTask(task)
            
        }else{
            /* NEW */ 
            props.addTask(task)
        }
        props.navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.safeArea}>
                <CHTextInput
                    style={styles.input}
                    placeholder={"Title"}
                    value={title}
                    placeholderTextColor={"#DDDDDD"}
                    onChangeText={onChangeTitle}
                />

                <CHTextInput
                    style={[styles.input, styles.textArea]}
                    multiline={true}
                    value={description}
                    placeholder={"Description"}
                    placeholderTextColor={"#DDDDDD"}
                    onChangeText={onChangeDescription}
                />

                <View style={[styles.input, styles.inputDate, styles.inputActive]}>
                    <Text style={styles.textActive}>
                        Deadline (optional)
                    </Text>
                </View>
                <View style={[styles.input, styles.inputDate, styles.inputInactive]}>
                    <Text style={styles.textInactive}>
                        Add Image (optional)
                    </Text>
                </View>
                <View style={[styles.input, styles.button]}>
                    <Text style={styles.textButton}>
                        Add Image (optional)
                    </Text>
                </View>

            <CHButtonGeneric 
                text={isEdit? "Edit Task": "Add Task"}
                BG_Color={'#FFFFFF'}
                TXT_Color={'#F79E89'}
                onPress={onPress}
            />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F79E89',
        padding: 15,
    },
    input: {
        borderColor: colors.WHITE,
        color: colors.WHITE,
        borderWidth: 2,
        marginBottom: 20,
    },
    inputDate: {
        padding: 10,
        borderRadius: 7,
        flexDirection: 'row'
    },
    button: {
        padding: 10,
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE
    },
    textButton: {
        color: '#F79E89',
        fontWeight: '500',
        fontSize: 14,
    },
    inputActive: { borderColor: colors.WHITE },
    inputInactive: { borderColor: '#FBCEC4' },
    textActive: { color: colors.WHITE },
    textInactive: { color: '#FBCEC4' },
    textArea: {
        minHeight: 400,
    }
})


export default FullScreenTask;