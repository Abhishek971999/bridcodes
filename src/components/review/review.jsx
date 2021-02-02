import "./review.css";
import reviews from "./review.json";
const Review = () => {
  return (
    <div className="review-section container">
      {reviews &&
        reviews.map((review, key) => (
          <div className="review-div" key={key}>
            <h3 className="review-main-text">{review?.review}</h3>
            <div className="review-author d-flex">
              <img className="review-author-img" src={review?.img} alt="" />
              <div className="review-author-name">
                <p>{review?.authorName}</p>
                <small>{review?.pos}</small>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Review;
