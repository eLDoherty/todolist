import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const Header = () => {
    return(
        <View style={styles.hedaerWrapper}>
            <Text style={styles.text}>My List</Text>
            <TouchableOpacity>
                <Icon name="ellipsis-v" size={20} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    hedaerWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 25,
        backgroundColor: '#df4b34',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: '700',
        textTransform: 'uppercase',
        fontSize: 18
    }
})

export default Header;