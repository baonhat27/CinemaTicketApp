import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './LoginScreen.scss';

export default function LoginScreen({navigation}) {
  return (
    <View className={styles.login}>
      <View className={styles.test}>
        <Button
          className={styles.button}
          onPress={() => navigation.navigate('MovieScreen')}
          title="Clickkkkkk"
        />
      </View>
    </View>
  );
}
