import accountInitState from '../initStates/accountInitState';
import {ACTIONS} from '../actions/accountAction';

export default (state = accountInitState, {type, payload}) => {
  switch(type) {
    case ACTIONS.LOADING_ACCOUNT:
      state = {
        ...state,
        loading: true
      }
      break;
    case ACTIONS.SAVE_ACCOUNT:
      state = {
        ...state,
        data: payload.data,
        loading: false
      }
      break;
    default:
      state = {
        ...state,
        error: payload.error
      }
      break;
  }
  return {...state};
}