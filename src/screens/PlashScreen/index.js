import { View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const PlashScreen = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <LottieView source={require('../../assets/lotties/plash_image.json')} autoPlay loop />
    </View>
  )
}

export default PlashScreen;