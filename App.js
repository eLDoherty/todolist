/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import Home from './src/screens/Home';
import History from './src/screens/History';
import CreateList from './src/screens/CreateList';
import { useState, createContext } from 'react';
import { ModalMenuContext } from './src/contextAPI/ModalMenuContext';

const Stack = createNativeStackNavigator();




const App = () => {

  const[showMenuModal, setMenuModal] = useState(false);

    return(
      <ModalMenuContext.Provider value={[showMenuModal, setMenuModal]}>
        <NavigationContainer>
          <StatusBar backgroundColor="#1F1F1F" barStyle="light-content"/> 
          <Stack.Navigator 
            screenOptions={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerTintColor: '#df4b34',
            headerStyle: {
              backgroundColor: '#FFF',
            },

            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Create List" component={CreateList} />
          </Stack.Navigator>
        </NavigationContainer>
      </ModalMenuContext.Provider>
    )
}

export default App;
