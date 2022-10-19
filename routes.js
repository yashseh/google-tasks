import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator,  TransitionPresets, } from '@react-navigation/native-stack';
import Home from './src/Screens/HomeScreen/home';
import NoteDetails from './src/Screens/NoteDetails/noteDetails';
const Routes = () => {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator 
     screenOptions={{
                headerShown: false,
}}
    >
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name="noteDetails" component={NoteDetails} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})