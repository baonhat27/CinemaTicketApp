import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import styles from './ConfirmLoginScreen.scss';
import WrapImage from '../../components/Image/Image';
import {login} from '../../services/account';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmLoginScreen({route}) {
  const [changeInput, setChangeInput] = useState(false);
  const [OTP, setOTP] = useState('');
  const navigation = useNavigation();
  const phoneNumber = route.params.phoneNumber;

  const handleSubmit = async () => {
    const dataUser = {
      otp: OTP,
      phone: phoneNumber
    };
    const {data, success} = await login(dataUser);
    console.log(data.data, success);
    if (success && data.data.token) {
      // navigation.navigate('ConfirmLoginScreen');
      console.log("login success!");
    } else {
      console.log("login fail!");
    }
  }

  return (
    <KeyboardAvoidingView style={styles.ConfirmLogin}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.ConfirmLoginContainer}>
          <View style={styles.ConfirmLoginLogo}>
            <WrapImage
              width={60}
              height={54}
              source={
                'https://firebasestorage.googleapis.com/v0/b/fir-react-upload-fb2fe.appspot.com/o/images%2FMessage.png?alt=media&token=c2459b35-7d8f-42f0-a956-256e4b56cdea'
              }
            />
          </View>
          <View>
            <Text style={styles.ConfirmLoginText1}>Mã OTP</Text>
            <Text style={styles.ConfirmLoginText2}>Nhập mã OTP của bạn</Text>
          </View>
          <TextInput
            style={styles.ConfirmLoginInput}
            placeholder="Nhập mã OTP"
            placeholderTextColor="#fff"
            maxLength={6}
            onChangeText={value => {
              if (value.length === 6) {
                setChangeInput(true);
                setOTP(value);
              } else {
                setChangeInput(false);
              }
            }}
          />
          <Text style={styles.ConfirmLoginFooter} onPress={handleSubmit}>
            {changeInput ? (
              <Text style={styles.ConfirmLoginFooterNext}>Tiếp theo</Text>
            ) : (
              'Để thanh toán vui lòng đăng nhập hệ thống'
            )}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
