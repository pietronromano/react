import { useEffect, useState } from 'react';

import LifecycleLogger from './components/LifecycleLogger';

function App() {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
  return notes || [];
  });

  // Save notes to localStorage whenever they change
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    setNotes(notes);
  }, [notes]);
 
  return (
    <div className='container'>
      <h2>React Lifecycle Playground</h2>

      {/* Toggle LifecycleLogger */}
      <button
        className='primary-btn'
        onClick={() => setShowLogger(!showLogger)}
      >
        {showLogger ? 'Unmount Logger' : 'Mount Logger'}
      </button>

      {showLogger && <LifecycleLogger />}
    </div>
  );
}
export default App;
