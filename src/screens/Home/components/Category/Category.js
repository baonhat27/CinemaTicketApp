import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Category.scss';
import CategoryItem from './CategoryItem';
import {HomeContext} from '../../../../context';

const categoryList = ['Action', 'Comedy', 'Romance', 'Thriller', 'Fantasy'];

export default function Category() {
  return (
    <View className={styles.home_category}>
      {categoryList.map((categoryItem, index) => {
        return (
          <CategoryItem
            key={categoryItem}
            index={index}
            categoryItem={categoryItem}
          />
        );
      })}
    </View>
  );
}
