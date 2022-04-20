import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ConfirmLoginScreen, HomeScreen, LoginScreen, FilmScreen, CinemaScreen, BookingScreen } from '../screens';

const Stack = createNativeStackNavigator();
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitle: ""
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ConfirmLoginScreen" component={ConfirmLoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FilmScreen" component={FilmScreen} />
      <Stack.Screen name="CinemaScreen" component={CinemaScreen} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
    </Stack.Navigator>
  );
};
