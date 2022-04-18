import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './ShowingFilm.scss';
import WrapImage from '../../../../components/Image/Image';
import {HomeContext} from '../../../../context';
import {useNavigation} from '@react-navigation/native';

export default function ShowingFilm() {
  const {nowShowingFilm, selectedId} = useContext(HomeContext);
  const navigation = useNavigation();
  return (
    <FlatList
      data={nowShowingFilm}
      extraData={selectedId}
      keyExtractor={(item, index) => index}
      horizontal={true}
      renderItem={({item}) => (
        <TouchableOpacity
          id={item.id}
          className={styles.home_nowShowing_film}
          onPress={() =>
            navigation.navigate('FilmScreen', {
              filmId: item.Id,
            })
          }>
          <View className={styles.home_nowShowing_film_card}>
            <WrapImage width={200} height={300} source={item.ImageUrls} />
          </View>
          <Text className={styles.home_nowShowing_film_title}>{item.Name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
