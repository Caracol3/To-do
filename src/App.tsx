import { useState } from "react";
import "./App.css";


type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

function App() {
  const firstTasks: Task[] = [
    {
      id: 1,
      title: "first task",
      isDone: false,
    },
    {
      id: 2,
      title: "secund task",
      isDone: true,
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(firstTasks);

  const [newTask, setNewTask] = useState<string>("");
  console.log(newTask);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: newTask, isDone: false },
    ]);
    setNewTask("");
  }

  return (
    <>
      <h1 className="text-primary mb-4">Ma todo</h1>
      <form
        onSubmit={(e) => submit(e)}
        className=" form-group d-flex justify-content-between mb-3"
      >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="mr-3 p-2 rounded border-primary"
          placeholder="New task"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
      <ul className="list-group">
        {tasks.map((task) => (
          <li className="list-group-item d-flex justify-content-between ">
            {task.title}
            <input type="checkbox" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
