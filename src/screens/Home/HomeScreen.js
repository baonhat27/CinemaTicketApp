import {View, Text, Button, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './HomeScreen.scss';
import globalStyles from '../../global.scss';
import Category from './components/Category/Category';
import ShowingFilm from './components/ShowingFilm/ShowingFilm';
import {HomeContext} from '../../context';
import ComingFilm from './components/ComingFilm/ComingFilm';
import { getByCate } from '../../services/film';

export default function HomeScreen() {
  const [category, setCategory] = useState('Action');
  const [selectedId, setSelectedId] = useState(0);
  const [nowShowingFilm, setNowShowingFilm] = useState([]);

  const fetchAPI = async cate => {
      const res = await getByCate(cate)
      setNowShowingFilm(res.data.data);
    
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
          <Text className={styles.home_header_item}>Tất cả phim</Text>
          <Text className={styles.home_header_item}>Dành cho trẻ em</Text>
          <Text className={styles.home_header_item}>Vé của tôi</Text>
        </View>
        <Text className={styles.header}>Sắp công chiếu</Text>
        <ComingFilm />
        <Category />
        <Text className={styles.header}>Đang chiếu</Text>
        <ShowingFilm />
      </View>
    </HomeContext.Provider>
  );
}
