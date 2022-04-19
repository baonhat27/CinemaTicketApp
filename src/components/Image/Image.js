import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function WrapImage({width, height, source,styles={}}) {
  // const a = {...styles}
  // console.log(a)
  return (
    <View>
      <Image
        source={{uri: source || "https://w0.peakpx.com/wallpaper/605/425/HD-wallpaper-loading-lock-phone-premium.jpg"}}
        style={{...styles,width: width, height: height}}
        resizeMode='cover'
      />
    </View>
  );
}

const styles = StyleSheet.create({});
