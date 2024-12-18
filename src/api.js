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
