import React, {createContext, useContext} from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Profile, LoginManager } from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';
import {AccountContext} from './AccountProvider';

GoogleSignin.configure();

export const LoginContext = createContext();

const LoginProvider = ({navigation, route, children}) => {
  const {storeFirebase, saveAccount} = useContext(AccountContext);

  const loginFb = async () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          Profile.getCurrentProfile().then(
            async (currentProfile) => {
              if (currentProfile) {
                const obj = {
                  type: 'fb',
                  id: currentProfile.userID,
                  name: currentProfile.name,
                  photo: currentProfile.imageURL,
                  news: []
                }
                console.log(obj);
                const user = await existAccountFirebase(obj);
                if(!user._exists) await storeFirebase(obj);
                else obj.news = user._data.news;
                await saveAccount(obj);
                goBack();
              }
            }
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  const loginGmail = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const obj = {
        type: 'gmail',
        id: userInfo.user.id,
        name: userInfo.user.name,
        photo: userInfo.user.photo,
        news: []
      }
      const user = await existAccountFirebase(obj);
      if(!user._exists) await storeFirebase(obj);
      else obj.news = user._data.news;
      await saveAccount(obj);
      goBack();
    } catch (error) {
      console.log(error)
    }
  }

  const existAccountFirebase = async (data) => {
    const user = await firestore().collection('root').doc(data.type+"_"+data.id).get();
    return user;
  }

  const goBack = () => {
    navigation.goBack();
  }

  const value = {
    loginFb,
    loginGmail,
    goBack
  }

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;