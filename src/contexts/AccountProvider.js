import React, {createContext, useReducer, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

import accountInitState from './initStates/accountInitState';
import accountReducer from './reducers/accountReducer';
import {getAccountAction, saveAccountAction, resetAccountAction} from '../contexts/actions/accountAction';

export const AccountContext = createContext();

const AccountProvider = (props) => {
  const [state, dispatch] = useReducer(accountReducer, accountInitState);

  useEffect(() => {
    getAccountAction()(dispatch);
  }, []);

  const saveAccount = (data) => {
    saveAccountAction(data)(dispatch);
  }
  
  const storeFirebase = async (data) => {
    await firestore()
    .collection('root')
    .doc(data.type+"_"+data.id)
    .set(data)
    .then(() => {
      console.log('User added!');
    })
    .catch((err) => {
      console.log('Error', err);
    });
  }

  const resetAccount = () => {
    resetAccountAction()(dispatch);
  }

  const storeNewsURL = (news) => {
    if(!state.data.news.filter(item => item.url == news.url).length > 0) {
      state.data.news.push(news);
      storeFirebase(state.data);
      saveAccount(state.data);
      return true;
    } else {
      state.data.news = state.data.news.filter(item => item.url != news.url);
      storeFirebase(state.data);
      saveAccount(state.data);
      return false;
    }
  }

  const value = {
    state,
    storeNewsURL,
    saveAccount,
    storeFirebase,
    resetAccount,
  }

  return (
    <AccountContext.Provider value={value}>
      {props.children}
    </AccountContext.Provider>
  )
}

export default AccountProvider