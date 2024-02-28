import React from "react";

const NewsCard = ({ newsDes }) => {
  const { title, author, description, source, publishedAt, urlToImage } =
    newsDes;
  return (
    <div className="news-card">
      <div className="news-description">
        <h3>{title}</h3>
        <p>{description}</p>
        <h3>Sources: {source.name}</h3>
        <h3>Authors: {author}</h3>
        <h3>Published At: {publishedAt}</h3>
      </div>
      <div className="img-container">
        <img
          src={
            urlToImage === null
              ? "https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg"
              : urlToImage
          }
          alt="News"
        />
      </div>
    </div>
  );
};

export default NewsCard;
