import { useState } from "react";

import TextInput from './inputs/TextInput'; //Note the path is relative to components folder
import SelectInput from './inputs/SelectInput';
import TextareaInput from './inputs/TextAreaInput';

// Destructure notes and setNotes from props
const NoteForm = ({ notes, setNotes }) => {
  // Collapsible: State to track form visibility: default to false (hidden)
  const [isFormVisible, setIsFormVisible] = useState(false);

  // State for controlled inputs: move to a single formData object
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return; // Validation
    console.log("Form submitted:", formData);
    // Create a new note object
    const newNote = { id: Date.now(), ...formData };
    // Add the new note to the notes array, which gets passed from App.jsx
    setNotes([newNote, ...notes]);
    // Reset form data
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });

    // Hide form after submission
    setIsFormVisible(false);
  };

  // Handle input changes
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    //The reason that we put the `e.target.name` in square brackets is because we want to use the value of the `name` attribute as the key in the object.
    // Without the brackets, it would be looked at as a string and we would get an error.
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // Empty element to wrap everything
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form ✖️" : "Add New Note ➕"}
      </button>
      {/* Conditionally render the form */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          {/* Use our new TextInput component */}
          <TextInput
            label='Title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />

          {/* SelectInput components */}
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "📂 Work" },
              { value: "Personal", label: "🏠 Personal" },
              { value: "Ideas", label: "💡 Ideas" },
            ]}
          />

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟠 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />

          <TextareaInput
            label='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-500 text-white cursor-pointer py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Add Note
          </button>
        </form>
      )}{/* End isFormVisible */}
      {" "}{/* if NOT visible: Added to prevent lint warning */}
    </> /* End empty element */  
  );
};

export default NoteForm;
