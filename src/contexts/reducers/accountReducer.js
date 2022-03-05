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
    case ACTIONS.RESET_ACCOUNT:
      state = {...accountInitState};
      break;
    default:
      state = {
        ...state,
        error: payload.error,
        loading: false
      }
      break;
  }
  return {...state};
}