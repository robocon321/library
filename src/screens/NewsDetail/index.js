import React from 'react';
import {View} from 'react-native';
import NewsDetailProvider from '../../contexts/NewsDetailProvider';
import NewsDetail from '../../components/NewsDetail/index';

const NewsDetailScreen = ({navigation, route}) => {
  return (
    <NewsDetailProvider>
      <NewsDetail navigation={navigation} route={route} />
    </NewsDetailProvider>
  )
}

export default NewsDetailScreen;
