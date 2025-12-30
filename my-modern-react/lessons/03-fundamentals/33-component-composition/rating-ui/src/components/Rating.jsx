//Let's add a rating value to state using the `useState` hook.
import { useState } from "react";
//Import the Star component
import Star from "./Star";

// Destructure props and provide default values
const Rating = ({
  heading = "Rate Your Experience",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
  color = "gold",
}) => {
  // Add state for rating
  // To debug, use React DevTools -> Components -> Rating -> Hooks
  const [rating, setRating] = useState(0);
  // Add state for hover
  const [hover, setHover] = useState(0);

  //Create an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {/* Replace the span with the Star component */}
        {stars.map((star, index) => (
          <Star
            key={star}
            star={star}
            hover={hover}
            rating={rating}
            color={color}
            ratingClick={setRating}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
