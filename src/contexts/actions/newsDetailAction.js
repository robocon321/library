import axios from 'axios';
import cheerio from 'cheerio';

const ACTIONS = {
  LOADING_NEWS_DETAIL: 'LOADING_NEWS_DETAIL',
  LOAD_NEWS_DETAIL_SUCCESS: 'LOAD_NEWS_DETAIL_SUCCESS',
  LOAD_NEWS_DETAIL_FAIL: 'LOAD_NEWS_DETAIL_FAIL'
}

const getNewsDetail = (url) => (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_NEWS_DETAIL
  });

  axios.get(url)
  .then(function (response) {
    const {data} = response;
    const $ = cheerio.load(data);

    $('#banner_top').remove();
    $('header').remove();
    $('.section.header').remove();
    $('.social_pin').remove();
    $('.footer-content.width_common').remove();
    $('.section-comment').remove();
     
    dispatch({
      type: ACTIONS.LOAD_NEWS_DETAIL_SUCCESS,
      payload: {
        data:$.html()
      }
    });    
  })
  .catch(function (error) {
    dispatch({
      type: ACTIONS.LOAD_NEWS_DETAIL_FAIL,
      payload: {
        error
      }
    })
  });
}

export {ACTIONS, getNewsDetail}