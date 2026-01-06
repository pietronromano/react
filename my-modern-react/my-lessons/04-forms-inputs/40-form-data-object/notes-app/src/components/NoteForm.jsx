import { useState } from "react";

const NoteForm = () => {
  // State for controlled inputs: move to a single formData object
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

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
    <form className="mb-6">
      <div className="mb-4">
        <label className="block font-semibold">Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          // Controlled input: onChange updates state
          onChange={handleChange}
          //ORIGINAL: w-full p-2 border rounded-lg input: redifined in styles.css to avoid repetition
          className="note-input"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Priority:</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="note-input"
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="note-input"
        >
          <option value="Work">📂 Work</option>
          <option value="Personal">🏠 Personal</option>
          <option value="Ideas">💡 Ideas</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="note-input"
          required
        ></textarea>
      </div>
    </form>
  );
};

export default NoteForm;
