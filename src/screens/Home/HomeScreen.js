import {View, Text, Button, Image, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './HomeScreen.scss';
import globalStyles from '../../global.scss';
import Category from './components/Category/Category';
import ShowingFilm from './components/ShowingFilm/ShowingFilm';
import {HomeContext} from '../../context';
import ComingFilm from './components/ComingFilm/ComingFilm';
import {getByCate} from '../../services/film';

export default function HomeScreen() {
  const [category, setCategory] = useState('Action');
  const [selectedId, setSelectedId] = useState(0);
  const [nowShowingFilm, setNowShowingFilm] = useState([]);
  const flatListRef = useRef();
  const onPressFunction = () => {
    flatListRef.current.scrollToIndex({index: 0});
  };

  const fetchAPI = async cate => {
    const res = await getByCate(cate);
    setNowShowingFilm(res.data.data);
    onPressFunction();
  };
  const handleCategory = cate => {
    setCategory(cate);
  };
  useEffect(() => {
    fetchAPI(category);
  }, [category]);

  return (
    <HomeContext.Provider
      value={{
        handleCategory,
        nowShowingFilm,
        setSelectedId,
        selectedId,
        onPressFunction,
        flatListRef,
      }}>
      <ScrollView className={styles.screen}>
        <ScrollView contentContainerStyle={styles.home_header}>
          <Text className={styles.home_header_item}>Tất cả phim</Text>
          <Text className={styles.home_header_item}>Dành cho trẻ em</Text>
          <Text className={styles.home_header_item}>Vé của tôi</Text>
        </ScrollView>
        <ComingFilm />
        <Category />
        <ShowingFilm />
      </ScrollView>
    </HomeContext.Provider>
  );
}
