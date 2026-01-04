import { useState, useEffect } from 'react';

const LifecycleLogger = () => {
  const [count, setCount] = useState(0); 

  // This works the same as the `componentDidMount` method in the class component.
  useEffect(() => {
    console.log('✅ LifecycleLogger Mounted');
    //useEffect takes an array as second argument: empty initially
    // deps — If present, effect will only activate if the values in the list change.
  }, []);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  // componentDidUpdate for `count`
  useEffect(() => {
    if (count > 0) {
      console.log('Component updated...', count);
    }
    // Only re-run the effect if count changes
  }, [count]);

    useEffect(() => {
    console.log('Component mounted...');

    return () => {
      console.log('Component will unmount...');
    };
  }, []);

  return (
    <div className='logger-container'>
      <h2>LifecycleLogger (Function Component)</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount} className='secondary-btn'>
        Update
      </button>
    </div>
  );
};

export default LifecycleLogger;