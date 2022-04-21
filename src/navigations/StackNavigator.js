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
} from '../screens';

export const StackNavigator = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  const token_login = AsyncStorage.getItem('token_login');
  // console.log("Type Of token" ,typeof(token_login));
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,
        headerTintColor: '#d98639',
        headerTitle: '',
        headerRight: () =>
          typeof token_login === String ? (
            <Avatar />
          ) : (
            <Text
              style={{
                color: '#d98639',
                fontSize: 18,
                fontWeight: '500',
                letterSpacing: 1,
              }}
              onPress={() => navigation.navigate('LoginScreen')}>
              Đăng nhập
            </Text>
          ),
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
          headerRight: () =>
            typeof token_login !== Object ? (
              <Avatar />
            ) : (
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}
                onPress={() =>
                  navigation.navigate('LoginScreen', {filmId: 9999})
                }>
                Đăng nhập
              </Text>
            ),
        }}
      />
      <Stack.Screen
        name="FilmScreen"
        component={FilmScreen}
        options={{
          headerTitle: 'Phim',
        }}
      />
      <Stack.Screen name="CinemaScreen" component={CinemaScreen} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
    </Stack.Navigator>
  );
};
