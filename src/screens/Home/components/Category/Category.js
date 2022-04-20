import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Category.scss';
import CategoryItem from './CategoryItem';
import {HomeContext} from '../../../../context';

const categoryList = ['Action', 'Comedy', 'Romance', 'Thriller', 'Fantasy'];

export default function Category() {
  return (
    <ScrollView contentContainerStyle={styles.home_category} horizontal={true}>
      {categoryList.map((item,index) => {
        return <CategoryItem
            categoryItem={item}
            index={index}
            key={index}
        />;
      })}
    </ScrollView>
  );
}
