import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { API_URL } from "./utils/constants";
import { useState } from "react";
import Shimmer from "./Shimmer";

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
    if (!data.ok) {
      throw new Error(
        `Failed to fetch data: ${data.status} ${data.statusText}`
      );
    }
    setNews(json?.articles);
  };
  return news.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="new-container">
        {news.map((newsData, index) => (
          <NewsCard key={index} newsDes={newsData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
