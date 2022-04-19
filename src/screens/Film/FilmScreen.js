import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './FilmScreen.scss';
import globalStyles from '../../global.scss';
import WrapImage from '../../components/Image/Image';
import {Dimensions} from 'react-native';
import {CustomButton} from '../../components';
import ReadMore from '@fawazahmed/react-native-read-more';
import {useNavigation} from '@react-navigation/native';
import { getById } from '../../services/film';

var width = Dimensions.get('window').width; //full width

export default function FilmScreen({route}) {
  const navigation = useNavigation();
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
  const filmId = route.params.filmId;
  const fetchAPI = async filmId => {
    const res = await getById(filmId)
    const thisFilm = res.data.data
    setFilm(thisFilm)
  };
  useEffect(() => {
    fetchAPI(filmId);
  }, []);
  return (
    <View>
      <View className={globalStyles.screen}>
        <View className={styles.film_screen}>
          <View className={styles.film_poster}>
            <WrapImage width={width} height={600} source={film.ImageUrls} />
          </View>
          <View className={styles.ticket_button}>
            <CustomButton
              width={170}
              height={57}
              content="Đặt vé"
              onPress={() =>
                navigation.navigate('CinemaScreen', {filmId: filmId})
              }
            />
          </View>
          <View className={styles.film_describe}>
            <Text className={styles.film_describe_item}>{film.Category}</Text>
            <Text className={styles.film_describe_item}>
              {film.Length} phút
            </Text>
          </View>
          <View className={styles.film_preview}>
            <Text className={styles.film_name}>{film.Name}</Text>
            <View className={styles.film_description}>
              <ReadMore
                numberOfLines={4}
                className={styles.text_description}
                animate={false}>
                {film.Description}
              </ReadMore>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
