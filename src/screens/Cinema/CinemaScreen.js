import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CinemaScreen.scss';
import globalStyles from '../../global.scss';
import {getByFilmId} from '../../services/cinema';
import Cinema from './components/Cinema';
import RootLayout from '../../rootLayout';

export default function CinemaScreen({route}) {
  const [cinema, setCinema] = useState([]);
  const filmId = route.params.filmId;
  const filmName = route.params.filmName;
  const fetchAPI = async id => {
    const res = await getByFilmId(id);
    setCinema(res.data.data);
    // console.log(res.data.data);
  };
  useEffect(() => {
    fetchAPI(filmId);
  }, []);
  return (
    <RootLayout>
      <View className={styles.cinema_screen}>
        <View className={styles.cinema_list}>
          <FlatList
            style={{width: '100%'}}
            data={cinema}
            keyExtractor={(item, index) => index}
            horizontal={false}
            renderItem={({item}) => (
              <View className={styles.cinema_list_item}>
                <Cinema item={item} filmId={filmId} filmName={filmName} />
              </View>
            )}
          />
        </View>
      </View>
    </RootLayout>
  );
}
