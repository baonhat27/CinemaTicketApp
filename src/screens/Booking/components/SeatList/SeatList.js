import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './SeatList.scss';
import {CustomButton} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {holdTicket} from '../../../../services/ticket';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SeatList({
  selectedSeats,
  setSelectedSeats,
  filmName,
  selectedSchedule,
  holdingSeats,
}) {
  const navigation = useNavigation();
  const arraySeats = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];
  const handleSelectSeat = seat => {
    if (selectedSeats.includes(seat)) {
      const arraySelectedSeats = selectedSeats.filter(item => {
        return item != seat;
      });
      setSelectedSeats(arraySelectedSeats);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };
  return (
    <View className={styles.seatList}>
      <View className={styles.seatListHeader}>
        <Text className={styles.seatListHeaderTitle}>Màn hình</Text>
      </View>
      <View className={styles.seatListContainer}>
        <View className={styles.seatListLeft}>
          {arraySeats.map((seat, index) => {
            if (index + 1 === 1 || index + 1 === 33) {
              return <View style={styles.seatListItemNone} key={index} />;
            }
            if (holdingSeats.includes(index + 1)) {
              return <View style={styles.seatListItemReserved} key={index} />;
            }
            return (
              <TouchableOpacity
                style={
                  selectedSeats.includes(seat)
                    ? styles.seatListItemSelected
                    : styles.seatListItem
                }
                onPress={() => handleSelectSeat(seat)}
                key={index}
              />
            );
          })}
        </View>
        <View className={styles.seatListRight}>
          {arraySeats.map((seat, index) => {
            if (index + 1 === 4 || index + 1 === 36) {
              return <View style={styles.seatListItemNone} key={index} />;
            }
            if (index + 1 === 6 || index + 1 === 22) {
              return <View style={styles.seatListItemReserved} key={index} />;
            }
            if (seat === 222) {
              return (
                <TouchableOpacity
                  style={styles.seatListItemSelected}
                  key={index}
                />
              );
            }
            return (
              <TouchableOpacity
                style={styles.seatListItem}
                onPress={value => {
                  console.log('Click selected ticket', value);
                  arraySeats[index] = 222;
                  setData(index);
                }}
                key={index}
              />
            );
          })}
        </View>
      </View>
      <View className={styles.seatListNote}>
        <View className={styles.seatListNoteBox}>
          <View className={styles.seatListNoteAvailable} />
          <Text className={styles.seatListNoteText}>Chưa đặt</Text>
        </View>
        <View className={styles.seatListNoteBox}>
          <View className={styles.seatListNoteReserved} />
          <Text className={styles.seatListNoteText}>Đã đặt</Text>
        </View>
        <View className={styles.seatListNoteBox}>
          <View className={styles.seatListNoteSelected} />
          <Text className={styles.seatListNoteText}>Đang chọn</Text>
        </View>
      </View>
      <View className={styles.seatListFooter}>
        <View className={styles.seatListFooterTotal}>
          <Text className={styles.filmName}>{filmName}</Text>
          <Text className={styles.seatListFooterTickets}>
            {selectedSeats.length === 0
              ? ''
              : `Đã đặt ${selectedSeats.length} ghế`}
          </Text>
          <Text className={styles.seatListFooterPrice}>
            {selectedSeats.length === 0
              ? ''
              : `${(selectedSeats.length * 50000)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ`}
          </Text>
        </View>
        <View className={styles.seatListFooterButton}>
          <CustomButton
            width={150}
            height={155}
            content="Đặt vé"
            onPress={() => {
              console.log(selectedSeats, selectedSchedule);
              holdTicket(selectedSchedule, selectedSeats);
              if (selectedSeats.length > 0) {
                setSelectedSeats('');
                navigation.navigate('PaymentScreen');
              } else alert("Vui lòng chọn chỗ ngồi","Vui lòng chọn chỗ ngồi")
            }}
          />
        </View>
      </View>
    </View>
  );
}
