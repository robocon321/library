import { View, Text } from 'react-native';
import React from 'react';
import Header from '../../components/common/Header';

const NotificationScreen = () => {
  return (
    <View>
      <Header 
        rightIcon='settings-outline'
        title='Thông báo'
      />
      <View style={{height: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: -50}}>
        <Text>Bạn chưa có thông báo nào</Text>
      </View>
    </View>
  )
}

export default NotificationScreen;