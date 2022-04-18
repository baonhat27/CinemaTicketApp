import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function WrapImage({width, height, source}) {
  return (
    <View>
      <Image
        source={{uri: source || "https://w0.peakpx.com/wallpaper/605/425/HD-wallpaper-loading-lock-phone-premium.jpg"}}
        style={{width: width, height: height,borderRadius: 10}}
        resizeMode='cover'
      />
    </View>
  );
}

const styles = StyleSheet.create({});
