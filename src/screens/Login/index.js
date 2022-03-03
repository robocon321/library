import { View, Text } from 'react-native';
import React from 'react';
import LoginComponent from '../../components/Login';

const LoginScreen = ({navigation, route}) => {
  return (
    <View>
      <LoginComponent />
    </View>
  )
}

export default LoginScreen;