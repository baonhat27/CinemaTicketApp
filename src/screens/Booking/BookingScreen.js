import {View, Text} from 'react-native';
import React from 'react';
import globalStyles from '../../global.scss';
import styles from './BookingScreen.scss';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BookingScreen({route}) {
  const cinema = route.params.cinema;
  const filmId = route.params.filmId;
  // console.log("Booking" ,filmId)
  return (
    <View className={globalStyles.screen}>
      <View className={styles.booking_screen}>
        <View className={styles.booking_screen_header}>
          <Text className={styles.cinema_name}>{cinema.Name}</Text>
          <Text className={styles.cinema_address}>
            <Icon name="location" size={20} />
            {cinema.Address}
          </Text>
        </View>
        <View className={styles.schedules}>
            <Text style={{color:"#fff", fontSize:20}}>Lịch chiếu phim</Text>
        </View>
        <View className={styles.booking_seats}>

        </View>
      </View>
    </View>
  );
}
