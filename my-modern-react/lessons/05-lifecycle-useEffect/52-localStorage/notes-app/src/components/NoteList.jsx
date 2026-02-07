import Note from './Note';

// Destructure notes and deleteNote from props
const NoteList = ({  notes, deleteNote  }) => {

  //.md instructions do this with a ternary condition, but cleaner to do it this way
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No notes yet!</p>;
  }

  // If we get here, there are notes to display
  return (
    <div className="space-y-4">
    {
      notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))
    }
    </div>
  );
};

export default NoteList;
