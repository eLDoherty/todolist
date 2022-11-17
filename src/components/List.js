import React, { useState, useEffect } from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';


const List = () => {

    return(
        <View style={styles.listWrapper}>
            <ScrollView>
                <View style={styles.itemWrapper}>
                    <View style={styles.iconHolder}>
                        <Icon name="circle" size={15} color="#df4b34" />
                        <View style={{marginLeft: 15}}>
                            <Text style={styles.title}>Note title number one</Text>
                            <Text style={styles.date}><Icon name="calendar" size={12} color="#df4b34" />   Nov 25 10:00PM</Text>
                        </View>
                    </View>
                    <Text style={styles.label}>Work</Text>
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.iconHolder}>
                        <Icon name="circle" size={15} color="green" />
                        <View style={{marginLeft: 15}}>
                            <Text style={styles.title}>Note title number one</Text>
                            <Text style={styles.date}><Icon name="calendar" size={12} color="#df4b34" />   Nov 25 10:00PM</Text>
                        </View>
                    </View>
                    <Text style={styles.label}>Personal</Text>
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.iconHolder}>
                        <Icon name="circle" size={15} color="orange" />
                        <View style={{marginLeft: 15}}>
                            <Text style={styles.title}>Note title number one</Text>
                            <Text style={styles.date}><Icon name="calendar" size={12} color="#df4b34" />   Nov 25 10:00PM</Text>
                        </View>
                    </View>
                    <Text style={styles.label}>Sport</Text>
                </View>
                <View style={styles.itemWrapper}>
                    <View style={styles.iconHolder}>
                        <Icon name="circle" size={15} color="grey" />
                        <View style={{marginLeft: 15}}>
                            <Text style={styles.title}>Note title number one</Text>
                            <Text style={styles.date}><Icon name="calendar" size={12} color="#df4b34" />   Nov 25 10:00PM</Text>
                        </View>
                    </View>
                    <Text style={styles.label}>Another</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    listWrapper: {
        marginTop: 70,
        width: '100%'
    },
    itemWrapper: {
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingVertical: 10,
        borderBottomColor: '#1f1f1f',
        borderBottomWidth: 0.2
    },
    iconHolder: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: '500'
    },
    date: {
        fontSize: 12,
        color: '#df4b34'
    },
    label: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})

export default List;