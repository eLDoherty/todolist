import { transform } from '@babel/core';
import React, { useState, useEffect, useContext } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import CategoryModal from './CategoryModal';
import { ModalMenuContext } from '../contextAPI/ModalMenuContext';

const Footer = ({props}) => {

    const navigation = useNavigation();
    const[showModal, setShowModal] = useState(false);
    const[showMenuModal, setMenuModal] = useContext(ModalMenuContext);

    const showModalHandler = () => {
        showModal ? setShowModal(false) : setShowModal(true);
    }
    return(
        
        <>
        { showModal ?  <CategoryModal props={showModal} /> : null }
            <View style={styles.footerHolder}>
                <View style={styles.buttonPlus} >
                    <TouchableOpacity onPress={() => navigation.navigate('Create List')}>
                        <Icon name="plus" size={15} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconHolder}>
                    <TouchableOpacity onPress={ ()=> setMenuModal(true) }>
                        <Icon name="bars" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showModalHandler()}>
                        <Icon name="list" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    footerHolder: {
        width: '100%',
        height: 60,
        backgroundColor: '#df4b34',
        position: 'absolute',
        bottom: 0,
    },
    buttonPlus: {
        width: 65,
        height: 65,
        borderRadius: 65/2,
        borderWidth: 4,
        borderColor: '#FFFFFF',
        backgroundColor: '#df4b34',
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
        paddingHorizontal: 25,
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
    },
})

export default Footer;