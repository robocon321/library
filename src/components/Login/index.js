import { View, Text } from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

GoogleSignin.configure();

const LoginComponent = () => {
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello world</Text>
      <GoogleSigninButton   
        style={{ width: 250, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signIn}
        />
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                console.log('Result: ',result);
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log('Data: ',data);
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>        
    </View>
  )
}

export default LoginComponent;