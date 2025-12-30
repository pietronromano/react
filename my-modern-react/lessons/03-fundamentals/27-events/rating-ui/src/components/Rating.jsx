const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  // Event handler for when a star is clicked
  // Try debugging with a breakpoint here
  const clicked = (star) => {
    console.log("clicked", star);
  };

  //Single line event handler for hover events
  const hovered = (direction, index) =>
    console.log("hovered", direction, index);

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
          // Each star is clickable and triggers the clicked function:
          // Note the required use of an arrow function to pass the star value
          <span
            key={star}
            className="star"
            onClick={() => clicked(star)}
            onMouseEnter={() => hovered("enter", index + 1)}
            onMouseLeave={() => hovered("leave", index + 1)}
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
