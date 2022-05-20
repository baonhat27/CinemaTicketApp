import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useEffect, useState} from 'react';
import styles from './PaymentScreen.scss';
import globalStyles from '../../global.scss';
import WrapImage from '../../components/Image/Image';
import {CustomButton} from '../../components';

export default function PaymentScreen() {
  const [method, setMethod] = useState('');
  useEffect(() => {
    console.log(method);
  }, [method]);
  return (
    <View className={globalStyles.screen}>
      <ScrollView content={styles.paymentScreen}>
        <View className={styles.ticket}>
          <WrapImage
            width={'30%'}
            height={250}
            source={
              'https://nerdist.com/wp-content/uploads/2021/01/DoctorStrangeInTheMultiverseOfMadness_Teaser2_Printed_1-Sht_v4_lg.jpg'
            }
          />
          <View className={styles.ticketInfo}>
            <Text className={styles.filmName}>John Wick</Text>
            <Text className={styles.time}>Mùng 1 tháng 6 năm 2022</Text>
            <Text className={styles.cinema}>Rạp chiếu phim quốc gia</Text>
            <Text className={styles.seat}>Ghế : A8 A9</Text>
            <Text className={styles.price}> Tổng cộng : 100000VNĐ</Text>
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
                <Icon
                  name={'check'}
                  size={23}
                  style={{color: '#fff', marginLeft: 30}}
                />
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
                <Icon
                  name={'check'}
                  size={23}
                  style={{color: '#fff', marginLeft: 30}}
                />
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
                <Icon
                  name={'check'}
                  size={23}
                  style={{color: '#fff', marginLeft: 30}}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View className={styles.confirm}>
          <Text className={styles.policy}>
            Tôi đồng ý với điều khoản sử dụng và mua vé xem phim
          </Text>
          <CustomButton
            width={300}
            height={60}
            content="Tôi đồng ý và tiếp tục"
          />
        </View>
      </ScrollView>
    </View>
  );
}
