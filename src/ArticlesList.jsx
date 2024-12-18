import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "./api";
import ArticleCard from "./ArticleCard";

// the idea is to fetch data from api,
//map over articles and display individual article cards
//useState to store the list of articles
// useEffect to fetch data when the component mounts

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error, "<= error fetching articles");
      });
  }, []);

  if (loading) {
    return <div>Loading articles, please wait...</div>;
  }

  return (
    <div className="articles-list">
      {articles.map((article) => (
        <Link to={`/articles/${article.article_id}`} key={article.article_id}>
          <ArticleCard article={article} />
        </Link>
      ))}
    </div>
  );
}
