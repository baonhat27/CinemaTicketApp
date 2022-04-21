import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './MyDatePicker.scss';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';

export default function MyDatePicker({setDate, date}) {
  const [open, setOpen] = useState(false);
 
  return (
    <TouchableOpacity className={styles.datepicker}>
      <Icon
        name="calendar"
        size={22}
        color="white"
        style={{marginRight: 20}}
        onPress={() => setOpen(true)}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        theme={'dark'}
        locale='vi'
        textColor='#d98639'
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        title="Chọn ngày"
      />
    </TouchableOpacity>
  );
}
