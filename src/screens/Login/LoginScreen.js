import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import styles from './LoginScreen.scss';
import WrapImage from '../../components/Image/Image';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [nextFooter, setNextFooter] = useState(false);
  const [changeInput, setChangeInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.login}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginContainer}>
          <View style={styles.loginLogo}>
            <WrapImage
              width={60}
              height={54}
              source={
                'https://firebasestorage.googleapis.com/v0/b/fir-react-upload-fb2fe.appspot.com/o/images%2FMessage.png?alt=media&token=c2459b35-7d8f-42f0-a956-256e4b56cdea'
              }
            />
          </View>
          <View>
            <Text style={styles.loginText1}>Số điện thoại</Text>
            <Text style={styles.loginText2}>Số điện thoại của bạn là gì?</Text>
          </View>
          <TextInput
            style={styles.loginInput}
            placeholder="Nhập số điện thoại"
            placeholderTextColor="#fff"
            maxLength={10}
            onPressIn={() => {
              setNextFooter(true);
            }}
            onBlur={() => {
              setNextFooter(false);
            }}
            onChangeText={value => {
              if (value.length === 10) {
                setChangeInput(true);
                setPhoneNumber(value);
              } else {
                setChangeInput(false);
              }
            }}
          />
          {!nextFooter ? (
            <Text style={styles.loginFooter}>
              Vui lòng xem{' '}
              <Text style={styles.loginFooterLink}>chính sách bảo mật</Text> của
              chúng tôi.
            </Text>
          ) : (
            <Text
              style={styles.loginFooterNext}
              onPress={() => navigation.navigate('ConfirmLoginScreen', { phoneNumber: phoneNumber })}>
              {changeInput ? 'Tiếp theo' : 'Vui lòng nhập đầy đủ số điện thoại'}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
