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

export default function LoginScreen() {
  const [input, setInput] = useState();
  return (
    <KeyboardAvoidingView style={styles.login}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginContainer}>
          <View style={styles.loginLogo}>
            <WrapImage
              width={60}
              height={54}
              source={'https://firebasestorage.googleapis.com/v0/b/fir-react-upload-fb2fe.appspot.com/o/images%2FMessage.png?alt=media&token=c2459b35-7d8f-42f0-a956-256e4b56cdea'}
            />
          </View>
          <View>
            <Text style={styles.loginText1}>Phone Number</Text>
            <Text style={styles.loginText2}>What is your phone number?</Text>
          </View>
          <TextInput
            style={styles.loginInput}
            placeholder="Phone Number"
            placeholderTextColor="#fff"
          />
          <Text style={styles.loginFooter}>
            For more information, see our{' '}
            <Text style={styles.loginFooterLink}>Privacy Policy.</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

