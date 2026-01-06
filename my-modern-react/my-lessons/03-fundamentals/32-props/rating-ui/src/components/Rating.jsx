//Let's add a rating value to state using the `useState` hook.
import { useState } from "react";

// Destructure props and provide default values
const Rating = ({
  heading = "Rate Your Experience",
  feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
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
        {stars.map((star, index) => (
          <span
            key={star}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            {"\u2605"}
          </span>
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}
    </div>
  );
};

export default Rating;
