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

const Stack = createNativeStackNavigator();

const App = () => {
    return(
      <NavigationContainer>
        <StatusBar backgroundColor="#1F1F1F" barStyle="light-content"/> 
        <Stack.Navigator 
          screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#1F1F1F',
         }
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Create List" component={CreateList} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
