import {View, Text} from 'react-native';
import React from 'react';
import styles from "./Avatar.scss"
import WrapImage from '../Image/Image';
export default function Avatar() {
  return (
    <View className={styles.home_avatar}>
      <WrapImage
        width={60}
        height={60}
        source={
          "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
     }
        styles={{borderRadius: 100}}
      />
    </View>
  );
}
