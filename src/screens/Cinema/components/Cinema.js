import {View, Text} from 'react-native';
import React from 'react';
import styles from './Cinema.scss';
import WrapImage from '../../../components/Image/Image';

export default function Cinema() {
  return (
    <View className={styles.cinema}>
      <View className={styles.cinema_img}>
        <WrapImage
          width={100}
          height={100}
          src="https://media.thuonghieucongluan.vn/uploads/2018_01_11/26734039-1683846598338331-2158010752302853305-n-1515652085.jpg"
        />
      </View>
      <View className={styles.cinema_info}>
        <Text className={styles.cinema_name}></Text>
        <Text className={styles.cinema_address}></Text>
      </View>
    </View>
  );
}
