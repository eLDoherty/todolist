import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, Image, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CreateList = () => {

    const [checkBoxImportant, setCheckBoxImportant] = useState(false);
    const [checkBoxCommon, setCheckBoxCommon] = useState(false);
    const [checkBoxSimple, setCheckBoxSimple] = useState(false);

    useEffect( () => {
        if( checkBoxImportant === true ) {
            setCheckBoxCommon(false);
            setCheckBoxSimple(false);
        } else if(checkBoxCommon === true ) {
            setCheckBoxImportant(false);
            setCheckBoxSimple(false);
        } else if( checkBoxSimple === true ) {
            setCheckBoxImportant(false);
            setCheckBoxCommon(false);
        }
    });

    return(
        <>
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.heading}>Title</Text>
                    <TextInput underlineColorAndroid='transparent' style={styles.inputTitle} placeholder={'Ex : Feeding an T-Rex'} />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.heading}>Description</Text>
                    <TextInput underlineColorAndroid='transparent' style={styles.inputDescription} multiline={true} />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.heading}>Priority</Text>
                    <View style={styles.checkboxContainer}>
                        <View style={styles.checkboxHolder}>
                            <Text>Important</Text>
                            <CheckBox
                                disabled={false}
                                value={checkBoxImportant}
                                onValueChange={ (newValue) => setCheckBoxImportant(newValue)}
                            />
                        </View>
                        <View style={styles.checkboxHolder}>
                            <Text>Common</Text>
                            <CheckBox
                                disabled={false}
                                value={checkBoxCommon}
                                onValueChange={(newValue) => setCheckBoxCommon(newValue)}
                            />
                        </View>
                        <View style={styles.checkboxHolder}>
                            <Text>Simple</Text>
                            <CheckBox
                                disabled={false}
                                value={checkBoxSimple}
                                onValueChange={(newValue) => setCheckBoxSimple(newValue)}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.heading}>Category</Text>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 30,
        marginHorizontal: 30
    },
    heading: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: '500',
        marginBottom: 10
    },
    inputTitle: {
        borderBottomWidth: 1,
        borderBottomColor: '#1f1f1f',
        height: 40,
        color: '#1f1f1f',
        fontSize: 18,
        paddingVertical: 5
    },
    descriptionContainer: {
        marginTop: 30,
        marginHorizontal: 30
    },
    inputDescription: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#1f1f1f',
        color: '#1f1f1f',
        paddingVertical: 5,
        fontSize: 18,
        lineHeight: 1.3
    },
    checkboxContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    checkboxHolder: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginRight: 30
    }
})

export default CreateList;