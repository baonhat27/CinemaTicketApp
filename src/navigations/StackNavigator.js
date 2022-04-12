import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, LoginScreen, MovieScreen} from '../screens';

const Stack = createNativeStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {backgroundColor: '#9AC4F8'},
        headerTintColor: 'white',
        headerBackTitle: 'Back',
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieScreen" component={MovieScreen} />
    </Stack.Navigator>
  );
};
