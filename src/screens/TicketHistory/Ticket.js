import {View, Text} from 'react-native';
import React, {useState} from 'react';
import style from './Ticket.scss';

export default function Ticket({film}) {
  const date = new Date(film.fromTime);
  const [seatList, setSeatList] = useState(film.seatCodes);
  return (
    <View className={style.ticket} style={{padding: 5}}>
      <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
        {film.filmName}
      </Text>
      <View className={style.row}>
        <Text style={{color: '#fff', fontSize: 14, textAlign: 'left'}}>
          Mã vé:
          {film.ticketCode}
        </Text>
        <Text style={{color: '#fff', fontSize: 14, textAlign: 'right'}}>
          Ghế:
          {seatList?.map(item => `${item} `)}
        </Text>
      </View>
      <View className={style.row}>
        <Text style={{color: '#fff', fontSize: 14, textAlign: 'left'}}>
          Ngày:
          {date.getDate()} tháng {date.getMonth() + 1} năm {date.getFullYear()}
        </Text>
      </View>
      <Text style={{color: '#fff', fontSize: 14, textAlign: 'left'}}>
        Đã thanh toán: {film.price}Đ
      </Text>
      <Text style={{color: '#fff', fontSize: 14, textAlign: 'center'}}>
        Rạp: {film.cinemaName}
      </Text>
    </View>
  );
}
