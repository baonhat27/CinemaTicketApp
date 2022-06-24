import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import styles from './SeatList.scss';
import {CustomButton} from '../../../../components';

export default function SeatList({
  selectedSeats,
  setSelectedSeats,
  filmName,
  filmId,
  handleClick,
  orderedSeats,
  holdingSeats,
  totalSeat,
}) {
  console.log(totalSeat);
  const navigation = useNavigation();
  const arraySeats = [];
  for (let i = 1; i < totalSeat; i++) {
    arraySeats.push(i);
  }
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
        <View className={styles.seatListNumber}>
          {arraySeats.map((seat, index) => {
            if (orderedSeats && orderedSeats.includes(index + 1)) {
              return <View style={styles.seatListItemReserved} key={index} />;
            }
            if (holdingSeats && holdingSeats.includes(index + 1)) {
              return <View style={styles.seatListItemHolding} key={index} />;
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
          <View className={styles.seatListNoteHolding} />
          <Text className={styles.seatListNoteText}>Đang giữ chỗ</Text>
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
            height={55}
            content="Đặt vé"
            onPress={handleClick}
          />
        </View>
      </View>
    </View>
  );
}
