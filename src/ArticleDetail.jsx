import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "./api";

//get article_id from url params

export default function ArticleDetail() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticle(article_id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error, "<= couldnt fetch article");
        setLoading(false);
      });
  }, [article_id]);

  if (loading) {
    return <div>Loading single article, please wait...</div>;
  }

  if (!article) {
    return <div>Sorry, article not found!</div>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <p>
        Author: {article.author} - Topic: {article.topic}
        {/* Need to find out why body is not working <div>{article.body}</div> */}
      </p>
    </div>
  );
}
