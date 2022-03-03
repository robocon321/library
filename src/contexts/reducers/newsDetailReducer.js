import {ACTIONS} from '../actions/newsDetailAction';
import { newsDetailInitState } from '../initStates/newsDetailInitState';

const newsDetailReducer = (state = newsDetailInitState, {type, payload}) => {
  switch (type) {
    case ACTIONS.LOADING_NEWS_DETAIL:
      state = {
        ...state,
        loading: true
      }
      break;
    case ACTIONS.LOAD_NEWS_DETAIL_SUCCESS:
      state = {
        ...state,
        data: payload.data,
        loading: false
      }
      break;
    case ACTIONS.LOAD_NEWS_DETAIL_FAIL:
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

export default newsDetailReducer;
