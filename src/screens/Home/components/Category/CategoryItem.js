import {View, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './Category.scss';
import {HomeContext} from '../../../../context';

export default function CategoryItem({
  categoryItem,
  index,
}) {
  
  const {handleCategory, setSelectedId, selectedId, onPressFunction} = useContext(HomeContext);
  return (
    <Text
      className={
        index === selectedId 
          ? styles.home_category_item_pressed
          : styles.home_category_item
      }
      onPress={() => {
        handleCategory(categoryItem);
        setSelectedId(index);
        // onPressFunction();
      }}>
      {categoryItem}
    </Text>
  );
}
