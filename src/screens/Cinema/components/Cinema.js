import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Cinema.scss';
import WrapImage from '../../../components/Image/Image';
import {useNavigation} from '@react-navigation/native';

export default function Cinema({item, filmId, filmName}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className={styles.cinema}
      onPress={() =>
        navigation.navigate('BookingScreen', {
          cinema: item,
          filmId: filmId,
          filmName: filmName,
        })
      }>
      <View className={styles.cinema_img}>
        <WrapImage
          width={120}
          height={120}
          source={item.ImageUrls}
          styles={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
        />
      </View>
      <View className={styles.cinema_info}>
        <Text className={styles.cinema_name}>{item.Name}</Text>
        <Text className={styles.cinema_address}>{item.Address}</Text>
      </View>
    </TouchableOpacity>
  );
}
