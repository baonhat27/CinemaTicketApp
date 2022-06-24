import {View, Text} from 'react-native';
import React from 'react';
import globalStyles from './global.scss';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function RootLayout({children}) {
  const navigation = useNavigation();
  return (
    <View className={globalStyles.screen}>
      <View className={globalStyles.bottomBar}>
        <Icon
          name="home"
          size={22}
          color="orange"
          style={{marginRight: 20}}
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Icon1
          name="ticket"
          size={22}
          color="orange"
          style={{marginRight: 20}}
          onPress={() => navigation.navigate('TicketHistory')}
        />
        <Icon
          name="user"
          size={22}
          color="orange"
          style={{marginRight: 20}}
          onPress={() => navigation.navigate('UserScreen')}
        />
      </View>
      {children}
    </View>
  );
}
