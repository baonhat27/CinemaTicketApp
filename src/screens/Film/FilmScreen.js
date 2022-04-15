import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './FilmScreen.scss';
import globalStyles from '../../global.scss';
import WrapImage from '../../components/Image/Image';
import {Dimensions} from 'react-native';
import {CustomButton} from '../../components';

var width = Dimensions.get('window').width; //full width

export default function FilmScreen({route}) {
  const filmId = route.params.filmId;
  console.log(filmId);
  return (
    <View>
      <View className={globalStyles.screen}>
        <View className={styles.film_screen}>
          <View className={styles.film_poster}>
            <WrapImage
              width={width}
              height={600}
              source="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg"
            />
          </View>
          <View className={styles.ticket_button}>
            <CustomButton width={170} height={57} content="Get Ticket" />
          </View>
          <View className={styles.film_preview}></View>
        </View>
      </View>
    </View>
  );
}
