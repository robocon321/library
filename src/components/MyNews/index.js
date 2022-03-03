import { View, Text } from 'react-native';
import React from 'react';
import LoginComponent from './Login';

const MyNewsComponent = ({navigation, route}) => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <LoginComponent navigation={navigation} route={route} />
    </View>
  )
}

export default MyNewsComponent;