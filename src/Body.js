import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { API_URL } from "./utils/constants";
import { useState } from "react";

const Body = () => {
  // Using useState to create state variables to maintain the news data
  const [news, setNews] = useState([]);

  // using useEffect to make an API call after the component is rendered.
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    setNews(json?.articles);
  };
  return (
    <div className="body">
      <h2>Headlines for Today</h2>
      <div className="new-container">
        {news.map((newsData, index) => (
          <NewsCard key={index} newsDes={newsData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
