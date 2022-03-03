import { View, AsyncStorage } from 'react-native';
import React from 'react';
import MainComponent from '../../components/Main/index';
import tabs from '../../config/tabContent';

const MainScreen = ({navigation, route}) => {
  // AsyncStorage.getItem('tabs', (err, result) => {
  //   if(result) {
  //     console.log(result); 
  //   } else {
  //     AsyncStorage.setItem('tabs', JSON.stringify(tabs, getCircularReplacer()));
  //   }
  // });


  return (
    <View>
      <MainComponent navigation = {navigation} route={route} />
    </View>
  )
}

export default MainScreen;