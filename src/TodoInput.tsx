import { useState } from "react";

export default function TodoInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        className="px-3 py-2 rounded bg-gray-800 border border-gray-700 outline-none w-64"
        type="text"
        placeholder="Add new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}
