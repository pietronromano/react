import { useState } from "react";

//Local component to manage its own state
const Counter = () => {
  // Lazy initialization of state: the function is called only once during the initial render
  // Better for performance if the initial state requires heavy computation
  const [count, setCount] = useState(() => {
    console.log("Initializing count...");
    return 4;
  });

  // Function to increment the count: uses functional update to ensure the latest state is used
  // Safer when multiple state updates might be queued
  // especially in asynchronous scenarios
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <button onClick={increment} className="button">
        Increment
      </button>
      <span className="rating-container">{count}</span>
    </>
  );
};

const App = () => {
  return (
    <>
      <h1>Counter Example with Local State</h1>
      <Counter />
    </>
  );
};

export default App;
