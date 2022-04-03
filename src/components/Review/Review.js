import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review-card">
      <h1>{review.name}</h1>
      <p>{review.review}</p>
      <p>Ratings: {review.ratings}/5</p>
    </div>
  );
};

export default Review;
