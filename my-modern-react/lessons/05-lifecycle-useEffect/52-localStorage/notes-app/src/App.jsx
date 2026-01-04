//Import the `useState` hook.
import { useState, useEffect } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from './components/NoteList';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
  // If there are no notes in localStorage, return an empty array
  return notes || [];
  });

  // Save notes to localStorage whenever they change
  // In Chrome DevTools, you can inspect localStorage under the Application tab
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Handle deleting a note
  const deleteNote = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (!confirmDelete) return;
    
    // Filter out the note with the given id
    setNotes(notes.filter((note) => note.id !== id));
  };
 
  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>📝 Notes App</h2>
      {/* Set notes and setNotes as props */}
      <NoteForm notes={notes} setNotes={setNotes} />
      {/* Pass notes and deleteNote function as props */}
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
