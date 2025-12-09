export default function TodoItem({ task, index, toggleTask, deleteTask }) {
  return (
    <div
      onClick={() => toggleTask(index)}
      className={
        "cursor-pointer bg-gray-800 p-3 mb-2 rounded flex justify-between  " +
        (task.completed ? "line-through text-gray-500" : "")
      }
    >
      <span>{task.text}</span>

      <button
        onClick={(e) => {
          e.stopPropagation();  
          deleteTask(index);
        }}
        className="text-red-500 hover:underline cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}
