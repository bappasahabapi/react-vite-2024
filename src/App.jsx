/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  // amar state jeikane thakbe handler seikhane thakbe

  const getNextId = (tasksArray) => {
    const maxId = tasksArray.reduce((prev, current) =>
      prev && prev > current.id ? prev : current.id
    );

    return maxId + 1;
  };

  const handleAddTask = (text) => {
    //  console.log(text)
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (newSingleTask) => {
    // console.log(newSingleTask);
    //todo: setTasks([]) -- ekaneo amra new array diye pathalab map use kore. js main array k mutated kore nai
    const nextTasks = tasks.map((task) => {
      if (task.id === newSingleTask.id) {
        return newSingleTask;
      } else {
        return task;
      }
    });
    setTasks(nextTasks);
  };

  const handleDeleteTask = (taskId) => {
    // console.log(taskId)
    const updatedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTask);
  };

  return (
    <>
      <h1>Add Your Task </h1>

      <AddTask onAdd={handleAddTask} />
      <hr />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
