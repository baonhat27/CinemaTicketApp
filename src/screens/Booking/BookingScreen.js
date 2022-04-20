import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../global.scss';
import styles from './BookingScreen.scss';
import Icon from 'react-native-vector-icons/Ionicons';
import WrapImage from '../../components/Image/Image';
import {getById} from '../../services/schedule';
import Schedule from './components/Schedule/Schedule';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from './components/DatePicker/DatePicker';

export default function BookingScreen({route}) {
  const cinema = route.params.cinema;
  const filmId = route.params.filmId;
  const [date, setDate] = useState('20/04/2022');
  const [schedule, setSchedule] = useState([]);
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
          <Text className={styles.cinema_name} numberOfLines={2}>
            {cinema.Name}
          </Text>
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
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            Lịch chiếu phim
          </Text>
          <View className={styles.date_choose}>
            <Text className={styles.date}>{date}</Text>
            <DatePicker />
          </View>
          <Schedule />
        </View>
        <View className={styles.booking_seats}>
          <Text style={{color: '#fff', fontSize: 20}}>Đặt chỗ</Text>
        </View>
      </ScrollView>
    </View>
  );
}
