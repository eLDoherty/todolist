import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const CategoryModal = ({props}) => {
    const[showModal, setShowModal] = useState(props);
    const closeModal = () => {
        setShowModal(false);
    }
    const modalMenuHandler = (e) => {
        alert(e);
    }
    return(
        <>
            {
                showModal ? 
                    <View style={styles.modalWrapper}>
                        <TouchableOpacity onPress={() => closeModal()} style={{position: 'absolute', right: 5, top: 2}}>
                            <Icon name='times' size={20} color='red' />
                        </TouchableOpacity>
                        <Text style={styles.modalMenuText}>Show By Category</Text>
                        <TouchableOpacity style={styles.borderMenu} onPress={ () => modalMenuHandler('Personal') } color="#1f1f1f">
                            <Text style={styles.modalMenu}>PERSONAL</Text>
                        </TouchableOpacity  >
                        <TouchableOpacity style={styles.borderMenu} onPress={ () => modalMenuHandler('Work') } color="#1f1f1f">
                            <Text style={styles.modalMenu}>WORK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.borderMenu} onPress={ () => modalMenuHandler('Game') } color="#1f1f1f">
                            <Text style={styles.modalMenu}>GAME</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.borderMenu} onPress={ () => modalMenuHandler('Show All') } color="#1f1f1f">
                            <Text style={styles.modalMenu}>SHOW ALL</Text>
                        </TouchableOpacity>
                    </View>
                : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    modalWrapper: {
        backgroundColor: '#1f1f1f',
        borderColor: '#1f1f1f',
        zIndex: 999,
        position: 'absolute',
        flex: 1,
        top: '20%',
        width: 230,
        paddingVertical: 30,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    borderMenu: {
        borderTopColor: 'white',
        borderBottomColor: 'white',
        borderTopWidth: 0.3,
        paddingVertical: 5,
    },
    modalMenu: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 5,
        fontWeight: 'bold'
    },
    modalMenuText: {
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default CategoryModal;