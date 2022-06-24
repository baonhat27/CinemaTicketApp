import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../global.scss';
import RootLayout from '../../rootLayout';
import {getTicket} from '../../services/ticket';
import Ticket from './Ticket';

export default function TicketHistory() {
  const [filmList, setFilmList] = useState([]);
  const fetchAPI = async () => {
    const res = await getTicket();
    setFilmList(res.data.data);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <RootLayout>
      <Text style={{color: '#fff', fontSize: 25, paddingTop: 30}}>
        Danh sách vé đã đặt
      </Text>
      {
        <FlatList
          style={{width: '100%'}}
          data={filmList}
          keyExtractor={(item, index) => index}
          horizontal={false}
          renderItem={({item}) => (
            <View style={{marginBottom: 20, paddingTop: 40}}>
              <Ticket film={item} />
            </View>
          )}
        />
      }
    </RootLayout>
  );
}
