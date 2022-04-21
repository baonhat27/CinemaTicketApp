import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import globalStyles from './../../global.scss';
import styles from './HomeScreen.scss';
import Category from './components/Category/Category';
import ShowingFilm from './components/ShowingFilm/ShowingFilm';
import {HomeContext} from '../../context';
import ComingFilm from './components/ComingFilm/ComingFilm';
import {getByCate} from '../../services/film';
import WrapImage from '../../components/Image/Image';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [category, setCategory] = useState('Action');
  const [selectedId, setSelectedId] = useState(0);
  const [nowShowingFilm, setNowShowingFilm] = useState([]);
  const flatListRef = useRef([]);

  // const token_login = AsyncStorage.getItem('token_login');

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
      <ScrollView contentContainerStyle={globalStyles.screen}>
        <View className={styles.screen}>
          {/* {token_login ? (
          <View className={styles.home_avatar}>
            <WrapImage
            width={60}
            height={60}
            source={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcV9dzXaOjNsfMc-GPxEdjWcAOFtV8x_gLn2KqpXN6pGgOa796SZCdyOjoysRYCPw1-s&usqp=CAU'
            }
            styles={{ borderRadius: 100, position: 'absolute', right: 0}}
          />
          </View>
        ) : (
          <Text className={styles.home_header}>Đăng nhập</Text>
        )} */}
          <ComingFilm />
          <Category />
          <ShowingFilm />
        </View>
      </ScrollView>
    </HomeContext.Provider>
  );
}
