import { useRef } from 'react';

const App = () => {

  // Create a ref for the input element, defaulting to null
  const inputRef = useRef(null);
  console.log(inputRef); // Logs: { current: null } initially current property is null

  const submit = () => {
    console.log('inputRef.current:', inputRef.current); // Logs: input DOM element
    console.log('inputRef.current.value:', inputRef.current.value); // Logs: current value of the input field
    // Clear the input field after submission
    inputRef.current.value = '';
    // Focus back to the input field
    inputRef.current.focus();
    // Update the placeholder text
    inputRef.current.setAttribute('placeholder', 'Updated...');
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
      <h2 className='text-2xl font-bold mb-4'>useRef Example</h2>

      <input
        type='text'
        placeholder='Type something...'
        className='w-full p-2 border rounded-lg'
        ref={inputRef}
      />

      <button
        className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
};
export default App;