import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from "../svg";
import { widthModalButton } from './utils';

type Options = {
    title?: string,
    color?: string,
    textColor?: string,
    backgroundColor?: string,
    onPress?: (...args: any) => void,
    closeModal?: Function
}

type Props = {
    title: string;
    icon?: string,
    image?: string,
    options?: Options[];
    closeModal?: Function
    modalVisible: boolean, 
}

const CHModal = ({ 
    title = "Some Message", 
    icon = 'warning',
    image = '', 
    options = [],
    modalVisible = false, 
    closeModal = () => {}
}: Props) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalView}>
                    
                    <View style={{
                        width: '80%',
                        padding: 15,
                        borderRadius: 5,
                        backgroundColor: '#ECEFF4',
                    }}>
                        <View style={{
                            alignItems:'flex-end'
                        }}>
                            <Icon 
                                color='#000000' 
                                button
                                name='close'
                                size={25} 
                                onPress={closeModal}
                            />
                        </View>
                        {icon && <View style={{
                            alignItems: 'center',
                        }}>
                            <Icon color='#EBCB8B' name={icon} size={100} />
                        </View>}
                        <View>
                            <Text style={styles.modalText}>{title}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}>
                            {options?.map(({ backgroundColor, color, title, onPress }, index) => (
                                <Pressable
                                    style={[styles.button, styles.buttonClose, { marginVertical: 5, backgroundColor, width: widthModalButton(index, options) }]}
                                    onPress={onPress} >
                                    <Text style={[styles.textStyle, { color }]}>{title}</Text>
                                </Pressable>
                            ))}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        alignItems: "center",
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    
});

export default CHModal