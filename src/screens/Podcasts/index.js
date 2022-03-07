import React from 'react';

import PodcastComponent from '../../components/Podcasts';
import PodcastProvider from '../../contexts/PodcastProvider';

const PodcastScreen = ({navigation, route}) => {
  return (
    <PodcastProvider>
      <PodcastComponent navigation={navigation} route={route} />
    </PodcastProvider>
  )
}

export default PodcastScreen;