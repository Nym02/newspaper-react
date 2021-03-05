import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const TopBusiness = () => {
  const [techCrunch, setTechCrunch] = useState([]);
  useEffect(() => {
    const url =
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=da25571c3fe24aefa1755b2bc1c8e345";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        setTechCrunch(data.articles);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {techCrunch.map((post) => {
            return <Post post={post}></Post>;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopBusiness;
