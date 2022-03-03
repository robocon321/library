import {ACTIONS} from '../actions/newsAction';
import { newsInitState } from '../initStates/newsInitState';

const newsReducer = (state = newsInitState, {type, payload}) => {
  switch (type) {
    case ACTIONS.LOADING:
      state = {
        ...state,
        loading: true
      }
      break;
    case ACTIONS.LOAD_NEW_SUCCESS:
      state = {
        ...state,
        data: payload.data,
        loading: false
      }
      break;
    case ACTIONS.LOAD_NEWS_FAIL:
      state = {
        ...state,
        error: payload.error,
        loading: false
      }
      break;

    default:
      break;
  }
  return {...state};
};

export default newsReducer;
