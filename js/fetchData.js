"use strict";
class RequestService {
  async getRequest(url) {
    const apiData = await await fetch(url)
      .then(data => {
        return data.json();
      })
      .catch(err => {
        newsSource.articlesProvider(err);
      });
        newsSource.articlesProvider(apiData);
  }
  async apiSourceFetcher(url) {


  }
}
class newsSourceProvider extends RequestService {
  constructor(data) {
    super(data);
  }
  articlesProvider(data) {
    const elementId = document.getElementById("newsDetails");
    let returnHtml = "",
      uniqueVal = [];
    if (data.status === "error") {
      returnHtml = `<div id="error">${data.message}</div>`;
    } else {
      data.articles.map(
        (
          { author, title, description, publishedAt, url, urlToImage },
          index
        ) => {
          uniqueVal = index === 0 ? `<h1>${author}</h1>` : "";
          returnHtml += `${uniqueVal}<div class="newsTitle">${title}</div><div class="newsDescription">${description}</div><div class="publishDate">${publishedAt}</div><div class="imageContainer"><a href="${url}" target="_blank"><img src=${urlToImage} /></a></div>`;
        }
      );
    }
    elementId.innerHTML = returnHtml;
  }
}
const requestCall = new RequestService();
const newsSource = new newsSourceProvider();
export default requestCall;
