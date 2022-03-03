import { View, Text } from 'react-native';
import React from 'react';
import MyNewsComponent from '../../components/MyNews';

const MyNews = ({navigation, route}) => {
  return (
    <View>
      <MyNewsComponent navigation={navigation} route={route} />
    </View>
  )
}

export default MyNews;