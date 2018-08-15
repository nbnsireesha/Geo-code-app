import axios from "axios";
const authKey = "f6fd9de0d4cd47c39eb5dd2d264a1730";

export default {
  // Finds articles from NYT api
  searchArticles: function(topic, startYear, endYear) {
    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${topic}${startYear && endYear ? `&begin_date=${startYear}0101&end_date=${endYear}0101` : ""}`;
    return axios.get(queryURL);
  },
  // Gets all saved articles
  getArticles: function() {
    return axios.get("/api/articles/");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};