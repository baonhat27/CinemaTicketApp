import {View, Text} from 'react-native';
import React from 'react';
import styles from "./ComingFilm.scss"
import WrapImage from '../../../../components/Image/Image';

export default function ComingFilm() {
  return (
    <View className={styles.home_comingsoon_film}>
      <View className={styles.home_comingsoon_film_card}>
        <WrapImage
          width={330}
          height={180}
          source="https://www.cnet.com/a/img/resize/7004c04b479ca2980c12848408ced21f2b10edf9/2022/02/18/9854a8df-ad35-43b1-b752-00afe29a96ca/the-batman-jonathan-olley-dc-rev-1-tbm-56056jorv4-high-res-jpeg.jpg?auto=webp&precrop=6000,3109,x0,y0&width=940"
        />
      </View>
    </View>
  );
}
