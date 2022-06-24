import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './FilmScreen.scss';
import globalStyles from '../../global.scss';
import WrapImage from '../../components/Image/Image';
import {Dimensions} from 'react-native';
import {CustomButton} from '../../components';
import ReadMore from '@fawazahmed/react-native-read-more';
import {useNavigation} from '@react-navigation/native';
import {getById} from '../../services/film';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootLayout from '../../rootLayout';

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
    const res = await getById(filmId);
    const thisFilm = res.data.data;
    setFilm(thisFilm);
  };
  useEffect(() => {
    fetchAPI(filmId);
  }, []);
  return (
    <RootLayout>
      <ScrollView>
        <ScrollView contentContainerStyle={globalStyles.screen}>
          <View className={styles.film_screen}>
            <View className={styles.film_poster}>
              <WrapImage width={width} height={600} source={film.ImageUrls} />
            </View>
            <View className={styles.film_button}>
              <View className={styles.film_describe}>
                <Text className={styles.film_describe_item}>
                  {film.Category}
                </Text>
                <Text className={styles.film_describe_item}>
                  <Icon name="time" size={18} />
                  {film.Length} phút
                </Text>
              </View>
              <View className={styles.ticket_button}>
                <CustomButton
                  width={120}
                  height={50}
                  content="Đặt vé"
                  onPress={async () => {
                    const tokenLogin = await AsyncStorage.getItem(
                      'token_login',
                    );
                    console.log('Token login', tokenLogin);
                    if (tokenLogin) {
                      navigation.navigate('CinemaScreen', {
                        filmId: filmId,
                        filmName: film.Name,
                      });
                    } else {
                      navigation.navigate('LoginScreen', {filmId: filmId});
                    }
                  }}
                  icon="ticket-confirmation-outline"
                />
              </View>
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
        </ScrollView>
      </ScrollView>
    </RootLayout>
  );
}
