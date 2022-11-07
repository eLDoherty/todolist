import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import EmptyList from '../components/EmptyList';
import Footer from '../components/Footer';

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <EmptyList />
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
})

export default Home;

