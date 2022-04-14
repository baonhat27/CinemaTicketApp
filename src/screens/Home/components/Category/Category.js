import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Category.scss';
import CategoryItem from './CategoryItem';

const categoryList = ['Action', 'Comedy', 'Romance', 'Thriller', 'Fantasy'];
const initArray = [];
for (var i = 0; i < categoryList.length; i++) {
  initArray.push(false);
}
export default function Category({handleCategory}) {
  const [checkClick, setCheckClick] = useState(initArray); 
  const handleCheckClick = index => {
    setCheckClick(initArray);
    setCheckClick(prev =>
      prev.map((item, _index) => (_index === index ? !item : item)),
    );
  };
  return (
    <View className={styles.home_category}>
      {categoryList.map((categoryItem, index) => {
        return (
          <CategoryItem
            key={categoryItem}
            index={index}
            handleCheckClick={handleCheckClick}
            checkClick={checkClick}
            categoryItem={categoryItem}
            handleCategory={handleCategory}
          />
        );
      })}
    </View>
  );
}
