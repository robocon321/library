import {AsyncStorage} from 'react-native';

const ACTIONS = {
  LOADING_ACCOUNT: 'LOADING_ACCOUNT',
  SAVE_ACCOUNT: 'SAVE_ACCOUNT',
  RESET_ACCOUNT: '',
  FAIL_ACCOUNT: 'FAIL_ACCOUNT'
}

const getAccountAction = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_ACCOUNT
  });

  try {
    const value = await AsyncStorage.getItem('account');
    if (value !== null) {
      const data = JSON.parse(value);
      dispatch({
        type: ACTIONS.SAVE_ACCOUNT,
        payload: {
          data
        }
      })
    }
  } catch (error) {
    dispatch({
      type: ACTIONS.FAIL_ACCOUNT,
      payload: {
        error
      }
    })
  }
}

const saveAccountAction = (data) => async (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_ACCOUNT
  });

 try {
    await AsyncStorage.setItem('account',JSON.stringify(data));
    dispatch({
      type: ACTIONS.SAVE_ACCOUNT,
      payload: {
        data
      }
    })
  } catch (error) {
    dispatch({
      type: ACTIONS.FAIL_ACCOUNT,
      payload: {
        error
      }
    })
  }
}

const resetAccountAction = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.RESET_ACCOUNT,
  })
}

export {
  ACTIONS,
  getAccountAction,
  saveAccountAction,
  resetAccountAction
}