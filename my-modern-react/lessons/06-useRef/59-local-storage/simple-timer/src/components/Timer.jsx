import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';

import { useState, useRef, useEffect } from 'react';

const Timer = () => {
  const timerRef = useRef(null);

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem('time')) || 0;
  });

  // Save time to localStorage whenever it updates
  // See the time saved changing in Chrome DevTools, Application > Local Storage > http://localhost:5173
  useEffect(() => {
    localStorage.setItem('time', time);
  }, [time]);

  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      //Clear interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // Start timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem('time'); // Remove saved time on reset
  };

  return (
    <div>
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        onToggle={toggleTimer}
        onReset={resetTimer}
      />
    </div>
  );
};

export default Timer;