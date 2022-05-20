import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../components/Avatar/Avatar';
import Logo from '../components/Logo/Logo';
import {
  ConfirmLoginScreen,
  HomeScreen,
  LoginScreen,
  FilmScreen,
  CinemaScreen,
  BookingScreen,
  PaymentScreen
} from '../screens';

export const StackNavigator = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  const token_login = AsyncStorage.getItem('username');
  // console.log("Type Of token" ,typeof(token_login));
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,
        headerTintColor: '#d98639',
        headerTitle: '',
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ConfirmLoginScreen" component={ConfirmLoginScreen} />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Logo />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="FilmScreen"
        component={FilmScreen}
        options={{
          headerTitle: 'Phim',
        }}
      />
      <Stack.Screen name="CinemaScreen" component={CinemaScreen} options={{
          headerTitle: 'Chọn rạp',
        }}/>
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
};
