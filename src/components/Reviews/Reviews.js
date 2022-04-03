import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReviews([]);
  return (
    <div>
      <h1>Customer Feedback</h1>
      <div className="reviews-container">
        {reviews.map((review) => (
          <Review review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
