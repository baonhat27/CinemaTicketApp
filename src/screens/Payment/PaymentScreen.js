import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useEffect, useState} from 'react';
import styles from './PaymentScreen.scss';
import globalStyles from '../../global.scss';
import WrapImage from '../../components/Image/Image';
import {CustomButton} from '../../components';
import {getById} from '../../services/film';
import FormatDate from '../../utils/FormatDate';
import {useNavigation} from '@react-navigation/native';
import RootLayout from '../../rootLayout';
import {cancelTicket, confirmTicket} from '../../services/ticket';

export default function PaymentScreen({route}) {
  const navigation = useNavigation();
  const data = route.params.data;
  const scheduleId = route.params.scheduleId;
  const [method, setMethod] = useState('');
  const {cinemaName, filmName, fromTime, toTime, price, seats, filmImg} = data;
  const date = new Date(fromTime);

  const handleSubmit = async () => {
    const res = await confirmTicket(scheduleId);
    if (res.data.message === 'success') {
      Alert.alert('Đặt vé thành công !', 'Kiểm tra vé của bạn', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('TicketHistory'),
          style: 'cancel',
        },
      ]);
    }
  };
  const handleCancel = async () => {
    const res = await cancelTicket(scheduleId);
    if (res.data.message === 'success') {
      navigation.navigate('HomeScreen');
    }
  };

  return (
    <RootLayout>
      <View className={globalStyles.screen}>
        <ScrollView content={styles.paymentScreen}>
          <View className={styles.ticket}>
            <WrapImage width={'30%'} height={250} source={filmImg} />
            <View className={styles.ticketInfo}>
              <Text className={styles.filmName}>{filmName}</Text>
              <Text className={styles.time}>
                {date.getDate()} tháng {date.getMonth() + 1} năm{' '}
                {date.getFullYear()}
              </Text>
              <Text className={styles.cinema}>{cinemaName}</Text>
              <Text className={styles.seat}>
                Ghế : {seats?.map(seat => ` ${seat}`)}
              </Text>
              <Text className={styles.price}> Tổng cộng : {price}VNĐ</Text>
            </View>
          </View>
          <View className={styles.payment}>
            <Text className={styles.paymentText}>Thanh toán</Text>
            <View className={styles.paymentContainer}>
              <TouchableOpacity
                className={styles.method}
                onPress={() => setMethod('MOMO')}>
                <Text
                  className={styles.methodName}
                  style={method === 'MOMO' ? {color: '#d98639'} : {}}>
                  Ví Momo
                </Text>
                {method === 'MOMO' && (
                  <>
                    <Icon
                      name={'check'}
                      size={23}
                      style={{color: '#fff', marginLeft: 30}}
                    />
                    <Text
                      className={styles.info}
                      style={
                        method === 'MOMO'
                          ? {color: '#fff', fontSize: 18, marginLeft: 10}
                          : {}
                      }>
                      0376275484
                    </Text>
                  </>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                className={styles.method}
                onPress={() => setMethod('VNPAY')}>
                <Text
                  className={styles.methodName}
                  style={method === 'VNPAY' ? {color: '#d98639'} : {}}>
                  VN Pay
                </Text>
                {method === 'VNPAY' && (
                  <>
                    <Icon
                      name={'check'}
                      size={23}
                      style={{color: '#fff', marginLeft: 30}}
                    />
                    <Text
                      className={styles.info}
                      style={
                        method === 'VNPAY'
                          ? {color: '#fff', fontSize: 18, marginLeft: 10}
                          : {}
                      }>
                      0974606413
                    </Text>
                  </>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                className={styles.method}
                onPress={() => setMethod('BANKING')}>
                <Text
                  className={styles.methodName}
                  style={method === 'BANKING' ? {color: '#d98639'} : {}}>
                  Ngân hàng
                </Text>
                {method === 'BANKING' && (
                  <>
                    <Icon
                      name={'check'}
                      size={23}
                      style={{color: '#fff', marginLeft: 30}}
                    />
                    <Text
                      className={styles.info}
                      style={
                        method === 'BANKING'
                          ? {color: '#fff', fontSize: 18, marginLeft: 10}
                          : {}
                      }>
                      288866628386 MB Bank
                    </Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View className={styles.confirm}>
            <Text className={styles.policy}>
              Tôi đồng ý với điều khoản và muốn mua vé
            </Text>
            <CustomButton
              width={300}
              height={60}
              content="Tôi đồng ý và tiếp tục"
              onPress={handleSubmit}
            />
            <View style={{marginTop: 10}}>
              <CustomButton
                width={300}
                height={60}
                content="Huỷ đặt vé"
                onPress={handleCancel}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </RootLayout>
  );
}
