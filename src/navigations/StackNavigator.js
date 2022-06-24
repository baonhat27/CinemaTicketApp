import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  ConfirmLoginScreen,
  HomeScreen,
  LoginScreen,
  FilmScreen,
  CinemaScreen,
  BookingScreen,
  PaymentScreen,
  TicketHistory,
  UserScreen,
} from '../screens';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const token_login = AsyncStorage.getItem('username');
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ConfirmLoginScreen" component={ConfirmLoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{}} />
      <Stack.Screen name="FilmScreen" component={FilmScreen} />
      <Stack.Screen name="CinemaScreen" component={CinemaScreen} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="TicketHistory" component={TicketHistory} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
};
