import { transform } from '@babel/core';
import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import CategoryModal from './CategoryModal';

const Footer = () => {

    const navigation = useNavigation();
    const[showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        showModal ? setShowModal(false) : setShowModal(true);
    }

    return(
        <>
            { showModal ?  <CategoryModal props={showModal} /> : null }
            <View style={styles.footerHolder}>
                <View style={styles.buttonPlus} >
                    <TouchableOpacity onPress={() => navigation.navigate('Create List')}>
                        <Icon name="plus" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconHolder}>
                    <TouchableOpacity onPress={ ()=> navigation.navigate('History') }>
                        <Icon name="history" size={35} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showModalHandler()}>
                        <Icon name="sort" size={40} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    footerHolder: {
        width: '100%',
        height: 80,
        backgroundColor: '#1F1F1F',
        position: 'absolute',
        bottom: 0,
    },
    buttonPlus: {
        width: 70,
        height: 70,
        borderRadius: 70/2,
        borderWidth: 7,
        borderColor: '#1f1f1f',
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        bottom: 30
    },
    iconHolder: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 50,
        alignItems: 'center',
        position: 'absolute',
        bottom: 18,
    },
})

export default Footer;