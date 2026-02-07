//Let's add a rating value to state using the `useState` hook.
import { useState } from "react";

const Rating = () => {
  // Add state for rating
  // To debug, use React DevTools -> Components -> Rating -> Hooks
  const [rating, setRating] = useState(0);
  // Add state for hover
  const [hover, setHover] = useState(0);

  //Create an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const feedbackMessages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
          // Each star is clickable and triggers the clicked function:
          // Note the required use of an arrow function to pass the star value
          // Classname is conditional: if star is less than or equal to hover or rating, add "active" class
          // Chrome DevTools -> Elements to inspect the star elements and see the class changes
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
