import React, {createContext, useReducer, useEffect} from 'react';
import newsReducer from './reducers/newsReducer';
import { newsInitState } from './initStates/newsInitState';
import { getNews } from './actions/newsAction';

export const NewsContext = createContext();

const NewsProvider = (props) => {
  const [newsState, dispatch] = useReducer(newsReducer, newsInitState);

  const loadNews = (url) => {
    getNews(url)(dispatch);
  }

  const value = {
    newsState,
    loadNews
  }

  return (
    <NewsContext.Provider value={value}>
      {props.children}
    </NewsContext.Provider>
  )
}

export default NewsProvider;