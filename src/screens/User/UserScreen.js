import {View, Text, TextInput} from 'react-native';
import styles from './UserScreen.scss';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../global.scss';
import RootLayout from '../../rootLayout';
import {editInfo, getUserInfo} from '../../services/user';
import {CustomButton} from '../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserScreen() {
  const [name, setName] = useState('A');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const fetchAPI = async () => {
    const res = await getUserInfo();
    setAge(res.data.data.Age);
    setName(res.data.data.Name);
    setEmail(res.data.data.Email);
    setPhone(res.data.data.PhoneNumber);
  };
  const handleEdit = async () => {
    // await AsyncStorage.removeItem('token_login');
   
    const res = await editInfo({
      age: age,
      email: email,
      name: name,
    });
  };

  useEffect(() => {
    setName('');
    setEmail('');
    setPhone('');
    fetchAPI();
  }, []);
  return (
    <RootLayout>
      <View className={globalStyles.screen} style={{paddingTop: 100}}>
        <Text
          style={{
            marginTop: 30,
            marginBottom: 40,
            fontSize: 20,
            fontWeight: '600',
            color: '#fff',
          }}>
          Thông tin người dùng
        </Text>
        <Text className={styles.name}>
          Tên:
          <TextInput className={styles.nameInput} onChangeText={setName}>
            {name}
          </TextInput>
          <Icon name="edit" color="#fff" size={20} />
        </Text>
        <Text className={styles.name}>
          Email:
          <TextInput className={styles.nameInput} onChangeText={setEmail}>
            {email}
          </TextInput>
        </Text>
        <Text className={styles.name}>
          SĐT:
          <TextInput
            className={styles.nameInputDisable}
            onChangeText={setPhone}
            keyboardType="numeric"
            editable={false}>
            {phone}
          </TextInput>
        </Text>
        <View style={{marginTop: 30}}>
          <CustomButton
            width={300}
            height={40}
            content="Chỉnh sửa"
            onPress={handleEdit}></CustomButton>
        </View>
      </View>
    </RootLayout>
  );
}
