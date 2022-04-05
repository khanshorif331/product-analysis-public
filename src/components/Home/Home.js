import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import img from "../../images/laptop.png";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="main-container">
      <div className="container">
        <div className="left-banner">
          <h1>
            Next Generation <span className="laptop">Laptop</span>
          </h1>
          <h1>HP New Nova P409</h1>
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
      <h1>Customer Reviews</h1>
      <div className="reviews-container">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
      <Link to="/reviews">
        <button className="review-btn">See All Reviews</button>
      </Link>
    </div>
  );
};

export default Home;
