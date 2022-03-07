import React, {createContext, useReducer, useEffect} from 'react'

import podcastReducer from '../contexts/reducers/podcastReducer';
import podcastInitState from './initStates/podcastInitState';
import {loadPodcastAction} from './actions/podcastAction';


export const PodcastContext = createContext();
const PodcastProvider = ({children}) => {
  const [state, dispatch] = useReducer(podcastReducer, podcastInitState);

  const loadPodcast = (url) => {
    loadPodcastAction(url)(dispatch);
  }

  const value = {
    state,
    loadPodcast
  }

  return (
    <PodcastContext.Provider value={value}>
      {children}
    </PodcastContext.Provider>
  )
}

export default PodcastProvider;