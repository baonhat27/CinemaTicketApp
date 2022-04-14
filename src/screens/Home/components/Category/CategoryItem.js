import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './Category.scss';

export default function CategoryItem({
  categoryItem,
  checkClick,
  index,
  handleCheckClick,
  handleCategory
}) {
  return (
    <Text
      className={
        checkClick[index]
          ? styles.home_category_item_pressed
          : styles.home_category_item
      }
      onPress={() => {
        handleCategory(categoryItem);
        handleCheckClick(index);
      }}>
      {categoryItem}
    </Text>
  );
}
