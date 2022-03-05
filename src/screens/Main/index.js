import { View } from 'react-native';
import React from 'react';
import MainComponent from '../../components/Main/index';

const MainScreen = ({navigation, route}) => {
  return (
    <View>
      <MainComponent navigation = {navigation} route={route} />
    </View>
  )  
}

export default MainScreen;