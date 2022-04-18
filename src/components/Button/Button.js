import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({width, height, content, onPress}) {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: height,
        backgroundColor: '#d98639',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
      onPress={onPress}>
      <Text style={{color: '#ffffff', fontSize: 16, fontWeight: '600'}}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}
