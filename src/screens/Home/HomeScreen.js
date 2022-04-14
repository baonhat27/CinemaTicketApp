import {View, Text, Button, Image} from 'react-native';
import WrapImage from '../../components/Image/Image';
import React, {useEffect, useState} from 'react';
import styles from './HomeScreen.scss';
import {CustomButton} from '../../components';
import Category from './components/Category/Category';
import {getFilmByCategory} from '../../services/CallAPI';

const categoryList = ['Action', 'Comedy', 'Romance', 'Thriller', 'Fantasy'];
export default function HomeScreen() {
  const [category, setCategory] = useState('Action');
  const [comingsoonFilm, setComingsoonFilm] = useState([]);
  const [nowShowingFilm, setNowShowingFilm] = useState([]);
  const getListFilmByCategory = async cate => {
    const res = await getFilmByCategory(cate);
    console.log(res.data.data);
  };
  const handleCategory = cate => {
    setCategory(cate);
  };
  useEffect(() => {
    getListFilmByCategory(category);
  }, [category]);
  return (
    <View className={styles.homescreen}>
      <View className={styles.home_header}>
        <Text className={styles.home_header_item}>All Movies</Text>
        <Text className={styles.home_header_item}>For Kids</Text>
        <Text className={styles.home_header_item}>My Ticket</Text>
      </View>
      <View className={styles.home_comingsoon_film}>
        <Text className={styles.header}>Coming soon</Text>
        <View className={styles.home_comingsoon_film_card}></View>
      </View>
      <Category handleCategory={handleCategory} />
      <View className={styles.home_nowShowing_film}>
        <Text className={styles.header}>Now Showing</Text>
        <View className={styles.home_nowShowing_film_card}>
          <WrapImage
            width={200}
            height={200}
            source="https://reactnative.dev/docs/assets/p_cat1.png"
          />
        </View>
        <Text className={styles.home_nowShowing_film_title}>Spiderman</Text>
      </View>
    </View>
  );
}
