import { useEffect, useState } from "react";
import { SingleTask } from "../App";

type TaskProps = {
  task: SingleTask;
};

export const Task = ({ task }: TaskProps) => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <>
      <li
        key={task.id}
        className="list-group-item d-flex justify-content-between "
      >
        {task.title}
        <input type="checkbox" />
        <button onClick={() => setCount(count + 1)}>+</button>
      </li>
    </>
  );
};
