import {View, Text, ScrollView, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../global.scss';
import {useNavigation} from '@react-navigation/native';
import styles from './BookingScreen.scss';
import Icon from 'react-native-vector-icons/Ionicons';
import WrapImage from '../../components/Image/Image';
import {getById} from '../../services/schedule';
import Schedule from './components/Schedule/Schedule';
import MyDatePicker from './components/MyDatePicker/MyDatePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormatDate from '../../utils/FormatDate';
import SeatList from './components/SeatList/SeatList';
import {getByScheduleId, holdTicket} from '../../services/ticket';
import RootLayout from '../../rootLayout';

export default function BookingScreen({route}) {
  const login_token = AsyncStorage.getItem('login_token');
  const cinema = route.params.cinema;
  const filmId = route.params.filmId;
  const filmName = route.params.filmName;
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState();
  const [holdingSeats, setHoldingSeats] = useState([]);
  const [orderedSeats, setOrderedSeats] = useState([]);
  const [totalSeat, setTotalSeats] = useState(0);
  const handleClickBooking = async () => {
    if (selectedSeats.length) {
      const res = await holdTicket(selectedSchedule, selectedSeats);
      if ((res.data.message = 'success')) {
        navigation.navigate('PaymentScreen', {
          data: res.data.data,
          scheduleId: selectedSchedule,
        });
      }
    } else {
      Alert.alert('Vui lòng chọn ghế !');
    }
  };

  const handleClickSchedule = async scheduleId => {
    setSelectedSeats([]);
    setHoldingSeats([]);
    setOrderedSeats([]);
    setSelectedSchedule(scheduleId);
    fetchAPI2(scheduleId);
  };
  // *****Call API to get schedule*****
  const fetchAPI = async (filmId, cinemaId, date) => {
    const res = await getById(filmId, cinemaId, date);
    setScheduleList(res.data.data);
  };
  // Call API to get ticket
  const fetchAPI2 = async scheduleId => {
    const res = await getByScheduleId(scheduleId);
    console.log(res.data.data);
    if (res.data.data.holding_seats) {
      setHoldingSeats(res.data.data.holding_seats);
    }
    if (res.data.data.ordered_seats) {
      setOrderedSeats(res.data.data.ordered_seats);
    }
    setTotalSeats(res.data.data.numOfColumns * res.data.data.numOfRows);
  };

  useEffect(() => {
    const formatedDate = date.toISOString().slice(0, 10);
    fetchAPI(filmId, cinema.Id, formatedDate);
  }, [date]);
  return (
    <RootLayout>
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
            <Text className={styles.date}>
              {date.getDate()} tháng {date.getMonth() + 1} năm{' '}
              {date.getFullYear()}
            </Text>
            <MyDatePicker date={date} setDate={setDate} />
          </View>
          {scheduleList ? (
            <ScrollView
              contentContainerStyle={styles.schedule_list}
              horizontal={true}>
              {scheduleList?.map(item => {
                return (
                  <Schedule
                    fromTime={FormatDate(item.fromTime)}
                    toTime={FormatDate(item.toTime)}
                    selectedSchedule={selectedSchedule}
                    key={item.id}
                    scheduleId={item.id}
                    handleClickSchedule={handleClickSchedule}
                  />
                );
              })}
            </ScrollView>
          ) : (
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              Không có lịch chiếu vào ngày này !
            </Text>
          )}
        </View>
        {selectedSchedule && (
          <View className={styles.booking_seats_box}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
              Đặt chỗ
            </Text>
            <View className={styles.booking_seats}>
              <SeatList
                orderedSeats={orderedSeats}
                handleClick={handleClickBooking}
                selectedSeats={selectedSeats}
                selectedSchedule={selectedSchedule}
                setSelectedSeats={setSelectedSeats}
                filmName={filmName}
                holdingSeats={holdingSeats}
                filmId={filmId}
                totalSeat={totalSeat}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </RootLayout>
  );
}
