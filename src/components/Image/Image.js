import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function WrapImage({width, height, source}) {
  return (
    <View>
      <Image
        source={{uri: source}}
        style={{width: width, height: height}}
        resizeMode='cover'
      />
    </View>
  );
}

const styles = StyleSheet.create({});
