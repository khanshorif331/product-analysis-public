import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import img from "../../images/laptop.png";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  console.log(reviews.slice(0, 3));
  const handleReview = () => {
    const newData = reviews.slice(0, 3);
    setReviews(newData);
  };
  console.log(reviews);
  return (
    <div>
      <div className="container">
        <div className="left-banner">
          <h1>
            Going to be the next best <span className="laptop">Laptop</span> in
            the World!!!
          </h1>
          <p>
            We have launched this product few months ago.In a very short time
            this has become everyones choice right now.So if you are looking for
            a laptop,this would be the best option.
          </p>
          <button className="buy-btn">Buy Now</button>
        </div>
        <div className="right-img">
          <img src={img} alt="" />
        </div>
      </div>
      <Reviews></Reviews>
      <Link to="/reviews">
        <button>See All Reviews</button>
      </Link>
    </div>
  );
};

export default Home;
