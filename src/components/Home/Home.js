import React from "react";
import img from "../../images/laptop.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="left-banner">
        <h1>
          Going to be the next best <span className="laptop">Laptop</span> in
          the World!!!
        </h1>
        <p>
          We have launched this product few months ago.In a very short time this
          has become everyones choice right now.So if you are looking for a
          laptop,this would be the best option.
        </p>
        <button className="buy-btn">Buy Now</button>
      </div>
      <div className="right-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
