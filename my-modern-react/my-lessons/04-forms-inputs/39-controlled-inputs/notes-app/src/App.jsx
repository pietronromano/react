import NoteForm from "./components/NoteForm";

const App = () => {
  return (
    // ORIGINAL: className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg': redifined in styles.css to avoid repetition
    <div className="app-container">
      {/* ORIGINAL: className='text-2xl font-bold mb-4 text-center' app-header */}
      <h2 className="app-header">📝 Notes App</h2>
      <NoteForm />
    </div>
  );
};

export default App;
