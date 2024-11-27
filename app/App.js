
/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

// import ToDoList from './src/components/ToDoList';
// import ToDoForm from './src/components/ToDoForm';


import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';


const Stack = createStackNavigator();

function App() {


  return (
    
      
      // Add the following:
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      // *********************
    
  );

};

export default App;
