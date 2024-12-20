import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://ivo-nc-news.onrender.com/api",
});

export const getArticles = () => {
  return articlesApi.get("/articles").then((res) => {
    console.log(res);
    return res.data;
  });
};

export const getArticle = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then((res) => {
    console.log(res.data.article);
    return res.data.article;
  });
};
