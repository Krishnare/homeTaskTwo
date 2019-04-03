import requestCall from './js/fetchData.js';

const newsCategory = "bbc-news";
const url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
requestCall.getRequest(url);
