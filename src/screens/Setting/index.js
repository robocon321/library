import { View, Text } from 'react-native';
import React from 'react';
import SettingComponent from '../../components/Setting';

const SettingScreen = ({navigation, route}) => {
  return (
    <SettingComponent navigation={navigation} route={route} />
  )
}

export default SettingScreen