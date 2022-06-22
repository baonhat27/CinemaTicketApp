import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Schedule.scss';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Schedule({
  scheduleId,
  handleClickSchedule,
  fromTime,
  toTime,
  selectedSchedule,
}) {
  return (
    <TouchableOpacity
      className={
        selectedSchedule === scheduleId
          ? styles.selected_schedules
          : styles.schedules
      }
      onPress={() => handleClickSchedule(scheduleId)}>
      <Text className={styles.time}>
        {fromTime} - {toTime}
      </Text>
    </TouchableOpacity>
  );
}
