import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../global.scss';
import styles from './BookingScreen.scss';
import Icon from 'react-native-vector-icons/Ionicons';
import WrapImage from '../../components/Image/Image';
import {getById} from '../../services/schedule';

export default function BookingScreen({route}) {
  const [schedule, setSchedule] = useState([]);
  const cinema = route.params.cinema;
  const filmId = route.params.filmId;
  // console.log("Booking" ,filmId)
  const fetchAPI = async (filmId, cinemaId) => {
    const res = await getById(filmId, cinemaId);
    // console.log(res.data.data)
    setSchedule(res.data.data);
  };
  useEffect(() => {
    fetchAPI(filmId, cinema.Id);
  }, []);
  return (
    <View className={globalStyles.screen}>
      <ScrollView className={styles.booking_screen}>
          <View className={styles.booking_screen_header}>
            <Text className={styles.cinema_name}>{cinema.Name}</Text>
            <Text className={styles.cinema_address}>
              <Icon name="location" size={20} />
              {cinema.Address}
            </Text>
          </View>
          <View className={styles.cinema_img}>
            <WrapImage
              height={250}
              source={cinema.ImageUrls}
              styles={{borderRadius: 10}}
            />
          </View>
          <View className={styles.schedules}>
            <Text style={{color: '#fff', fontSize: 20}}>Lịch chiếu phim</Text>
          </View>
          <View className={styles.booking_seats}>
          <Text style={{color: '#fff', fontSize: 20}}>Đặt chỗ</Text>

          </View>
      </ScrollView>
    </View>
  );
}
