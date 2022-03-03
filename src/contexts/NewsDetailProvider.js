import React, {createContext, useReducer} from 'react';
import newsDetailReducer from './reducers/newsDetailReducer';
import { newsDetailInitState } from './initStates/newsDetailInitState';
import { getNewsDetail } from './actions/newsDetailAction';

export const NewsDetailContext = createContext();

const NewsDetailProvider = (props) => {
  const [newsDetailState, dispatch] = useReducer(newsDetailReducer, newsDetailInitState);

  const loadNewsDetail = (url) => {
    getNewsDetail(url)(dispatch);
  }

  const value = {
    newsDetailState,
    loadNewsDetail
  }

  return (
    <NewsDetailContext.Provider value={value}>
      {props.children}
    </NewsDetailContext.Provider>
  )
}

export default NewsDetailProvider;