import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import EmptyList from '../components/EmptyList';
import Footer from '../components/Footer';
import MenuModal from '../components/MenuModal';
import Header from '../components/Header';
import List from '../components/List';

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Header />
            <List />
            <Footer />
            <MenuModal />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
})

export default Home;

