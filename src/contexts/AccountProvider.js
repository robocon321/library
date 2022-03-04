import React, {createContext, useReducer, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

import accountInitState from './initStates/accountInitState';
import accountReducer from './reducers/accountReducer';
import {getAccountAction, saveAccountAction} from '../contexts/actions/accountAction';

export const AccountContext = createContext();

const AccountProvider = (props) => {
  const [account, dispatch] = useReducer(accountReducer, accountInitState);

  useEffect(() => {
    getAccountAction()(dispatch);
  }, []);

  useEffect(() => {
    console.log(account);
  }, [account]);

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


  const value = {
    account,
    saveAccount,
    storeFirebase
  }

  return (
    <AccountContext.Provider value={value}>
      {props.children}
    </AccountContext.Provider>
  )
}

export default AccountProvider