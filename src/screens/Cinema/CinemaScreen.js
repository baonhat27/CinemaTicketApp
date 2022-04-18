import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CinemaScreen.scss';
import globalStyles from '../../global.scss';
import {getByFilmId} from '../../services/cinema';
import Cinema from './components/Cinema';

export default function CinemaScreen({route}) {
  const [cinema, setCinema] = useState([]);
  const filmId = route.params.filmId;
  const fetchAPI = async id => {
    const res = await getByFilmId(id);
    setCinema(res.data.data);
    console.log(res.data.data);
  };
  useEffect(() => {
    fetchAPI(filmId);
  }, []);
  return (
    <View className={globalStyles.screen}>
      <View className={styles.cinema_screen}>
        <View className={styles.cinema_list}>
          <FlatList
            data={cinema}
            keyExtractor={(item, index) => index}
            horizontal={false}
            renderItem={({item}) => (
              <View className={styles.cinema_list_item}>
                <Cinema />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
