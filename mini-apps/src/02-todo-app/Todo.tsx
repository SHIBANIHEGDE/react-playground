import React, { useRef, useState } from "react";
import type { TodoProps, TodoItem } from "./Todo.types";
import "./Todo.css";

const Todo = ({ className }: TodoProps) => {
  const [todoList, setTodolist] = useState<TodoItem[]>([]);
  const [inputText, setInputText] = useState("");
  const [taskIdToEdit, setTaskIdToEdit] = useState<string>("");
  const [taskTextToEdit, setTaskTextToEdit] = useState<string>("");
  const taskInput = useRef<HTMLInputElement>(null);
  const addTask = () => {
    console.log("in addtask");
    if (!inputText.trim()) {
      return;
    }

    const newTask: TodoItem = {
      id: Date.now().toString(),
      text: inputText,
      completed: false,
    };

    setTodolist([...todoList, newTask]);

    console.log("todoList", todoList);
  };

  const startEdit = (todoitem: TodoItem) => {
    // const taskToEdit = todoList.find((item)=> item.id ===  todoitem.id);
    // taskToEdit.text =

    setTaskIdToEdit(todoitem.id);
    setTaskTextToEdit(todoitem.text);
  };
  const saveEdit = () => {
    setTodolist((prev) =>
      prev.map((item) =>
        item.id === taskIdToEdit ? { ...item, text: taskTextToEdit } : item
      )
    );
    cancelEdit();
    taskInput.current?.focus();
  };
  const cancelEdit = () => {
    // const taskToEdit = todoList.find((item)=> item.id ===  todoitem.id);
    // taskToEdit.text =
    setTaskIdToEdit("");
    setTaskTextToEdit("");
  };
  const deleteTask = (todoitem: TodoItem) => {
    setTodolist(todoList.filter((item) => item.id !== todoitem.id));
  };
  const toggleTask = (todoitem: TodoItem) => {
    setTodolist(
      todoList.map((item) => {
        return item.id === todoitem.id
          ? { ...item, completed: !item.completed }
          : item;
      })
    );
  };
  return (
    <div className={className}>
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-2xl font-bold">My Tasks</h1>
      </header>
      <div className="flex flex-row">
        <input
          type="text"
          value={inputText}
          ref={taskInput}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          placeholder="Enter task"
          className="todo-input flex-1"
        />
        <button disabled={!inputText.trim()} onClick={addTask}>
          Add
        </button>
      </div>

      <div>
        {todoList.map((item) => (
          <div key={item.id} className="flex flex-row">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTask(item)}
            />
            {taskIdToEdit === item.id ? (
              <input
                autoFocus
                type="text"
                value={taskTextToEdit}
                className="flex-1"
                onChange={(e) => setTaskTextToEdit(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveEdit();
                  if (e.key === "Escape") cancelEdit();
                }}
              />
            ) : (
              <div
                className={`flex-1 ${item.completed ? "line-through" : ""} `}
                onClick={() => {
                  console.log("on click");
                  startEdit(item);
                }}
              >
                {item.text}
              </div>
            )}

            <button onClick={() => startEdit(item)}>Edit</button>
            <button onClick={() => deleteTask(item)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
