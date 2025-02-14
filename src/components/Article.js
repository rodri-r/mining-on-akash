// components/Article.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const ArticleComponent = require(`./articles/${id}`).default;

  return <ArticleComponent />;
};

export default Article;
