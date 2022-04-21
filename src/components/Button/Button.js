import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomButton({width, height, content, onPress, icon}) {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: height,
        backgroundColor: '#d98639',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
      onPress={onPress}>
      <Icon name={icon} size={23} style={{color:'#fff', marginRight:5}}/>
      <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}
