import requestCall from '../js/fetchData.js';

//On change load
const sourceSelectBox = document.getElementById("newsSource");

sourceSelectBox.onchange = function() {
    const newsCategory = this.value;
    const url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
    instance.apiFetcher(url);
  };

const apiKey = "720c0314e8b2423eb7e1ffca5a1eeeb1";
const newsCategory = "bbc-news";
const url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
requestCall.getRequest(url);
