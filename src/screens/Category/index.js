import { View, Text } from 'react-native';
import React from 'react';
import CategoryComponent from '../../components/Category/index';

const CategoryScreen = ({navigation}) => {
  return (
    <View>
      <CategoryComponent navigation={navigation} />
    </View>
  )
}

export default CategoryScreen;