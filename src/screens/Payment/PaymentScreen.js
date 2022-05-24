import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useEffect, useState} from 'react';
import styles from './PaymentScreen.scss';
import globalStyles from '../../global.scss';
import WrapImage from '../../components/Image/Image';
import {CustomButton} from '../../components';
import {holdTicket} from '../../services/ticket';
import {getById} from '../../services/film';


export default function PaymentScreen({route}) {
  const filmId = route.params.filmId;
  const [method, setMethod] = useState('');
  const [film, setFilm] = useState({
    Category: '',
    CreatedAt: '',
    Description: '',
    Id: '',
    ImageUrls: '',
    Length: '',
    Name: '',
    OpeningDay: '',
    UpdatedAt: '',
  });
  const fetchAPI = async id => {
    const res = await getById(id);
    setFilm(res.data.data);
  };
  useEffect(() => {
    fetchAPI(filmId);
  }, []);

  const handleSubmit = () => {};
  return (
    <View className={globalStyles.screen}>
      <ScrollView content={styles.paymentScreen}>
        <View className={styles.ticket}>
          <WrapImage width={'30%'} height={250} source={film.ImageUrls} />
          <View className={styles.ticketInfo}>
            <Text className={styles.filmName}>{film.Name}</Text>
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
        </View>
      </ScrollView>
    </View>
  );
}
