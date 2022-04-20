import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './DatePicker.scss'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import  Icon  from 'react-native-vector-icons/Ionicons';


export default function DatePicker() {
  const [show, setShow] = useState(false);

  const openDatePicker = () => {
       DateTimePickerAndroid.open
  }
  return (
     <TouchableOpacity className={styles.datepicker}>
     <Icon
       name="calendar"
       size={22}
       color="white"
       style={{marginRight: 20}}
       onPress={() => setShow(true)}
     />
     {show && (
       <DateTimePickerAndroid
         value={new Date()}
         minimumDate={new Date()}
         maximumDate={new Date(2022, 12, 12)}
         mode="date"
         display="spinner"
         
       />
     )}
   </TouchableOpacity>
  )
}