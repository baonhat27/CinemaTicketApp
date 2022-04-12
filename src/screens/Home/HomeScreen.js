import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './HomeScreen.scss';
import {CustomButton} from '../../components';
export default function HomeScreen() {
  return (
    <View className={styles.homescreen}>
      <View className={styles.home_header}>
        <Text className={styles.home_header_item}>All Movies</Text>
        <Text className={styles.home_header_item}>For Kids</Text>
        <Text className={styles.home_header_item}>My Ticket</Text>
      </View>
      <View className={styles.home_comingsoon_film}>
        <Text className={styles.header}>Coming soon</Text>
        <View className={styles.home_comingsoon_film_card}></View>
      </View>
      <View className={styles.home_category}>
        <Text className={styles.home_category_item}>Ation</Text>
        <Text className={styles.home_category_item}>Comedy</Text>
        <Text className={styles.home_category_item}>Romance</Text>
        <Text className={styles.home_category_item}>Thriller</Text>
        <Text className={styles.home_category_item}>Fantasy</Text>
      </View>
      <View className={styles.home_nowShowing_film}>
        <Text className={styles.header}>Now Showing</Text>
        <View className={styles.home_nowShowing_film_card} >
            
        </View>
        <Text className={styles.home_nowShowing_film_title}>
              Spiderman
        </Text>
      </View>
      
    </View>
  );
}
