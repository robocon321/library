import axios from 'axios';
import cheerio from 'cheerio';

const ACTIONS = {
  LOADING_PODCAST: 'LOADING_PODCAST',
  SAVE_PODCAST: 'SAVE_PODCAST',
  ERROR_PODCAST: 'ERROR_PODCAST'
}

const loadPodcastAction = (url) => (dispatch) => {
  dispatch({
    type: ACTIONS.LOADING_PODCAST
  });

  axios.get(url)
  .then(function (response) {
    const {data} = response;
    const $ = cheerio.load(data);
    const articles = [];

    $('article').each(function (i, elem) {
      const article = {};
      const articleCheerio = cheerio.load($(this).html());
      article.tag = articleCheerio('.tag a').text();
      article.title = articleCheerio('.title-news a').text();
      article.descrp = articleCheerio('.description a').text();
      article.url = articleCheerio('.description a').attr('href');
      article.thumbnail = articleCheerio('picture img').attr('src');
      article.time = articleCheerio('.time').text();
      articles.push(article);
    });

    dispatch({
      type: ACTIONS.SAVE_PODCAST,
      payload: {
        data: articles
      }
    });
  })
  .catch(function (error) {
    dispatch({
      type: ACTIONS.ERROR_PODCAST,
      payload: {
        error
      }
    })
  });
}

export {
  ACTIONS,
  loadPodcastAction
}