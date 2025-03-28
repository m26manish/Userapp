import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../screens/Loginscreen';
import userscreen from '../screens/userscreen';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


const appNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" options={{headerShown:false}} component={Loginscreen} />
    <Stack.Screen name="user" options={{headerShown:false}} component={userscreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default appNavigation

