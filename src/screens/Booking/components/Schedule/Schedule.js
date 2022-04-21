import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Schedule.scss';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Schedule({scheduleId, handleClickSchedule}) {
  return (
    <TouchableOpacity
      className={styles.schedules}
      onPress={() => handleClickSchedule(scheduleId)}>
      <Text className={styles.time}>2:30PM - 4:25PM</Text>
      <Text className={styles.slots_available}>
        <Icon name="seat" size={20} style={{marginRight: 5}} />
        25 slots available
      </Text>
    </TouchableOpacity>
  );
}
