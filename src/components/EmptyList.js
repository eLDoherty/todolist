import React, { useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const gif = require('../assets/gifs/monophy.gif');
const EmptyList = () => {

    return(
    <View style={styles.centerFlex}>
        <Image style={styles.gifs} source={gif} />
        <Text style={styles.textEmpty}>Don't have any list yet</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    centerFlex: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        marginBottom: 60
    },
    textEmpty: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    gifs: {
        width: 100,
        height: 100
    }
})

export default EmptyList;