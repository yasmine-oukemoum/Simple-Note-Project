import { useState } from 'react';

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <form className="flex space-x-2" onSubmit={handleAddTask}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default Input;
