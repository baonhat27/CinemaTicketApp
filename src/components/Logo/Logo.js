import styles from './Logo.scss';
import {View, Text} from 'react-native';
import React from 'react';
import WrapImage from '../Image/Image';

export default function Logo() {
  return (
    <View className={styles.logo}>
      <WrapImage
        width={60}
        height={60}
        source={
          'https://upload.wikimedia.org/wikipedia/commons/d/dc/Pvrcinemas_logo.jpg'
        }
        styles={{borderRadius: 0, paddingTop: 10, marginLeft: 10}}
      />
    </View>
  );
}
