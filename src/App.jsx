/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import {initialTasks} from './data/tasks'

function App() {

  const [tasks, setTasks]=useState(initialTasks)
  return (
    <>
      <h1>Add Your Task </h1>
      <AddTask />
      <hr />

      <TaskList
      tasks={tasks}
      />
    </>
  );
}

export default App;
