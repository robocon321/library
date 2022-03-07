import {ACTIONS} from '../actions/podcastAction';
import podcastInitState from '../initStates/podcastInitState';

export default (state = podcastInitState, {type, payload}) => {
  switch(type) {
    case ACTIONS.LOADING_PODCAST:
      state = {
        ...state,
        loading: true
      }
      break;
    case ACTIONS.SAVE_PODCAST:
      state = {
        ...state,
        loading: false,
        data: payload.data,
        error: ''
      }
      break;
    default:
      state = {
        ...state,
        data: [],
        error: payload.error,
        loading: false
      }
      break;
  }
 
  return {...state};
}