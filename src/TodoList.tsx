import TodoItem from "./TodoItem";

export default function TodoList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="w-full max-w-md">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
