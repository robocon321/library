import { View, Text } from 'react-native';
import React, { useContext } from 'react';

import CustomButton from '../common/CustomButton';
import Header from '../common/Header';
import Break from '../common/Break';
import { LoginContext } from '../../contexts/LoginProvider';
import styles from './styles';


const LoginComponent = (props) => {
  const {
    loginFb,
    loginGmail,
    goBack
  } = useContext(LoginContext)

  return (
    <View style={styles.container}>
      <Header 
        leftIcon='arrow-back-outline'
        title='Đăng nhập'
        onLeftPress={() => {
          goBack();
        }}
      />
      <View style={styles.wrapButton}>
        <CustomButton 
          onPress={loginGmail}
          title='Đăng nhập bằng Google' 
          leftIcon={'google-plus-g'} 
          leftColor='#c20000'
          backgroundColor='white' 
          color='black'
          fontSize={15}
          width={300}
          styles={styles.button}
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
          styles={styles.button}
          />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.loginEmail}>Đăng nhập bằng email</Text>
      </View>
      <View style={styles.wrapFooter}>
        <Break />
        <View style={styles.containerComponentFooter}>
          <Text style={styles.existAccountText}>Chưa có tài khoản</Text>
            <Text style={styles.createAccountText}>Tạo tài khoản</Text>
        </View>
      </View>
    </View>
  )
}

export default LoginComponent;