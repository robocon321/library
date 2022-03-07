import { View, Text } from 'react-native';
import React from 'react';

import PodcastDetailComponent from '../../components/PodcastDetail';

const PodcastDetailScreen = ({navigation, route}) => {
  console.log(route.params);
  return (
    <PodcastDetailComponent navigation={navigation} route={route} />
  )
}

export default PodcastDetailScreen;