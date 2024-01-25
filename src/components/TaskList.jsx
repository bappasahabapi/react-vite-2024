/* eslint-disable react/prop-types */

import Task from "./Task";
import { useTasks } from "../contexts/TaskContext";

export default function TaskList() {
  const tasks=useTasks()
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  );
}
