import React, { useState, useEffect, useRef } from "react";

// 1. Define the Task Shape
interface TodoTask {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  // 2. State with "Lazy Initialization" for LocalStorage
  const [taskName, setTaskName] = useState<string>("");
  const [todoList, setTodolist] = useState<Array<TodoTask>>(() => {
    const saved = localStorage.getItem("my_todos");
    return saved ? JSON.parse(saved) : [];
  });

  // 3. Ref for auto-focusing the input
  const inputRef = useRef<HTMLInputElement>(null);

  // 4. "Watcher" Effect to save to LocalStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem("my_todos", JSON.stringify(todoList));
  }, [todoList]);

  // 5. Logic to add a task
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault(); // Stop page refresh
    
    if (taskName.trim().length <= 1) return;

    setTodolist((prev) => {
      // Your logic: find the last ID + 1
      const lastItem = prev[prev.length - 1];
      const nextId = lastItem ? lastItem.id + 1 : 1;

      const newTask: TodoTask = {
        id: nextId,
        task: taskName.trim(),
        completed: false
      };

      return [...prev, newTask]; // Return NEW array (Immutability)
    });

    setTaskName(""); // Clear input
    inputRef.current?.focus(); // Return focus to input
  };

  // 6. Logic to delete a task
  const deleteTask = (idToDelete: number) => {
    setTodolist((prev) => prev.filter((task) => task.id !== idToDelete));
  };

  // 7. Logic to toggle completion (Updates an object inside an array)
  const toggleComplete = (id: number) => {
    setTodolist((prev) => 
      prev.map((item) => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="flex flex-col items-center p-10 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">React Todo</h1>

      <form onSubmit={addTodo} className="flex gap-2 mb-8">
        <input
          ref={inputRef}
          placeholder="What needs to be done?"
          className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-64"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="submit"
          disabled={taskName.trim().length <= 1}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </form>

      <ul className="w-full max-w-md space-y-3">
        {todoList.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                checked={item.completed}
                onChange={() => toggleComplete(item.id)}
                className="w-5 h-5 cursor-pointer"
              />
              <span className={`text-lg ${item.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
                {item.task}
              </span>
            </div>
            
            <button
              onClick={() => deleteTask(item.id)}
              className="text-red-400 hover:text-red-600 font-bold px-2 py-1 transition-colors"
              title="Delete Task"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {todoList.length === 0 && (
        <p className="text-gray-400 mt-10 italic">Your list is empty. Add a task to get started!</p>
      )}
    </div>
  );
};

export default Todo;