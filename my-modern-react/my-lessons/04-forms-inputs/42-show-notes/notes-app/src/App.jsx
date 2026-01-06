//Import the `useState` hook.
import { useState } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from './components/NoteList';

const App = () => {
  // State to hold notes: empty array initially
  const [notes, setNotes] = useState([]);
 
  return (
    // ORIGINAL: className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg': redifined in styles.css to avoid repetition
    <div className="app-container">
      {/* ORIGINAL: className='text-2xl font-bold mb-4 text-center' app-header */}
      <h2 className="app-header">📝 Notes App</h2>
      {/* Set notes and setNotes as props */}
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
