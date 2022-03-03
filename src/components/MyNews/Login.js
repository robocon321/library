import { View, Text, Button } from 'react-native';
import React from 'react';
import colors from '../../config/colors';


const LoginComponent = ({navigation, route}) => {
  return (
    <View style={{paddingHorizontal:40, marginTop: 20}}>
      <Text style={{textAlign: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>Thêm nội dung yêu thích</Text>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: '200', color: 'black', marginVertical: 20}}>Đăng nhập để thiết lập danh sách chuyên mục và tác giả yêu thích</Text>
      <Button onPress={() => {
        navigation.navigate('LoginScreen');
      }} title='Đăng nhập ngay' color= {colors.primary} />
    </View>
  )
}

export default LoginComponent;