import axios from 'axios';
import XMLParser from 'react-xml-parser';

const ACTIONS = {
  LOADING: 'LOADING',
  LOAD_NEW_SUCCESS: 'LOAD_NEW_SUCCESS',
  LOAD_NEWS_FAIL: 'LOAD_NEWS_FAIL'
}

const getNews = (url) => (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING
  });

  axios.get(url)
  .then(function (response) {
    const {data} = response;
    const xml = new XMLParser().parseFromString(data);    // Assume xmlText contains the example XML
    const items = xml.getElementsByTagName('item');
    dispatch({
      type: ACTIONS.LOAD_NEW_SUCCESS,
      payload: {
        data: [...items]
      }
    });    
  })
  .catch(function (error) {
    dispatch({
      type: ACTIONS.LOAD_NEWS_FAIL,
      payload: {
        error
      }
    })
  });
}

export {ACTIONS, getNews}