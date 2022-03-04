import { View, Text } from 'react-native';
import React from 'react';
import LoginComponent from '../../components/Login';
import LoginProvider from '../../contexts/LoginProvider';

const LoginScreen = ({navigation, route}) => {
  return (
    <LoginProvider navigation={navigation} route={route}>
      <View>
        <LoginComponent />
      </View>
    </LoginProvider>
  )
}

export default LoginScreen;