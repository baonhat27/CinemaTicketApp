import {View, Text, Button, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './HomeScreen.scss';
import globalStyles from '../../global.scss'
import Category from './components/Category/Category';
import {getFilmByCategory} from '../../services/CallAPI';
import ShowingFilm from './components/ShowingFilm/ShowingFilm';
import {HomeContext} from '../../context';
import ComingFilm from './components/ComingFilm/ComingFilm';

export default function HomeScreen() {
  const [category, setCategory] = useState('Action');
  const [selectedId, setSelectedId] = useState(0);
  const [nowShowingFilm, setNowShowingFilm] = useState([]);
  const fetchAPI = async cate => {
    try {
      // console.log(cate)
      const res = await getFilmByCategory(cate);
      setNowShowingFilm(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCategory = cate => {
    setCategory(cate);
  };
  useEffect(() => {
    fetchAPI(category);
  }, [category]);

  return (
    <HomeContext.Provider
      value={{handleCategory, nowShowingFilm, setSelectedId, selectedId}}>
      <View className={globalStyles.screen}>
        <View className={styles.home_header}>
          <Text className={styles.home_header_item}>All Movies</Text>
          <Text className={styles.home_header_item}>For Kids</Text>
          <Text className={styles.home_header_item}>My Ticket</Text>
        </View>
        <Text className={styles.header}>Coming soon</Text>
        <ComingFilm/>
        <Category />
        <Text className={styles.header}>Now Showing</Text>
        <ShowingFilm />
      </View>
    </HomeContext.Provider>
  );
}
