import { View, Text } from 'react-native';
import React, { useContext } from 'react';

import CustomButton from '../common/CustomButton';
import Header from '../common/Header';
import Break from '../common/Break';
import { LoginContext } from '../../contexts/LoginProvider';


const LoginComponent = (props) => {
  const {
    loginFb,
    loginGmail,
    goBack
  } = useContext(LoginContext)

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Header 
        leftIcon='arrow-back-outline'
        title='Đăng nhập'
        onLeftPress={() => {
          goBack();
        }}
      />
      <View style={{alignItems: 'center', marginTop: 50}}>
        <CustomButton 
          onPress={loginGmail}
          title='Đăng nhập bằng Google' 
          leftIcon={'google-plus-g'} 
          leftColor='#c20000'
          backgroundColor='white' 
          color='black'
          fontSize={15}
          width={300}
          styles={{
              marginTop: 10,
              borderRadius: 6,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,

              elevation: 2,
          }}
        />
        <CustomButton 
          onPress={loginFb}
          title='Đăng nhập bằng Facebook' 
          leftIcon={'facebook-square'}
          leftColor='blue'
          backgroundColor='white' 
          color={'black'}
          fontSize={15}
          width={300}
          styles={{
              marginTop: 10,
              borderRadius: 6,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.20,
              shadowRadius: 1.41,

              elevation: 2,
          }}
          />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{
          width: 300,
          marginTop: 20,
          textAlign: 'center',
          fontSize: 20,
          color: 'blue',
          textDecorationLine:'underline'
        }}>Đăng nhập bằng email</Text>
      </View>
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}>
        <Break />
        <View style={{
          paddingVertical: 15,
          flexDirection: 'row', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
          <Text style={{
              marginRight: 10,
              textAlign: 'center',
              color: 'black',
              fontSize: 20,
            }}>Chưa có tài khoản</Text>
            <Text style={{
              marginRight: 10,
              textAlign: 'center',
              fontSize: 20,
              color: 'blue',
              textDecorationLine: 'underline'
            }}>Tạo tài khoản</Text>
        </View>
      </View>
    </View>
  )
}

export default LoginComponent;