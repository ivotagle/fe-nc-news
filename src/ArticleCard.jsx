import { Link } from "react-router";
import React from "react";

//to display an individual article details
//remember to use the article prop to pass data for each card

const ArticleCard = ({ article }) => {
  return (
    <section className="article-card">
      <img src={article.article_img_url} alt={article.title} />
      <h3>{article.title}</h3>
      <p>
        {article.author} - {article.topic}
      </p>
    </section>
  );
};

export default ArticleCard;
