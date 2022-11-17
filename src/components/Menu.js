import React, { useState, useContext } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity} from "react-native";
import { ModalMenuContext } from "../contextAPI/ModalMenuContext";
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const Menu = () => {

    return(
        <View style={styles.MenuWrapper}>
             <TouchableOpacity activeOpacity={0.7} style={styles.iconWrapper}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="book" size={30} color="#FFFFFF" />
                    <Text style={{color: 'white', marginTop: 8, fontWeight: 'bold'}}>My List</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconWrapper}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="envelope" size={30} color="#FFFFFF" />
                    <Text style={{color: 'white', marginTop: 8, fontWeight: 'bold'}}>Inbox</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconWrapper}>  
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="laugh" size={30} color="#FFFFFF" />
                    <Text style={{color: 'white', marginTop: 8, fontWeight: 'bold'}}>Just Laugh</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconWrapper}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="pen-alt" size={30} color="#FFFFFF" />
                    <Text style={{color: 'white', marginTop: 8, fontWeight: 'bold'}}>My Notes</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconWrapper}>  
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="question" size={30} color="#FFFFFF" />
                    <Text style={{color: 'white', marginTop: 8, fontWeight: 'bold'}}>Informations</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.iconWrapper}>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="search" size={30} color="#FFFFFF" />
                    <Text style={{color: 'white', marginTop: 8, fontWeight: 'bold'}}>Search</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    MenuWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        justifyContent: 'space-between'
    },
    iconWrapper: {
        backgroundColor: '#df4b34',
        padding: 30,
        borderRadius: 10,
        width: '48%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
})
export default Menu;