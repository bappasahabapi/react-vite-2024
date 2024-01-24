/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";

function App() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks,dispatch]=useReducer(taskReducer,initialTasks)


  const getNextId = (tasksArray) => {
    const maxId = tasksArray.reduce((prev, current) =>
      prev && prev > current.id ? prev : current.id
    );

    return maxId + 1;
  };

  const handleAddTask = (text) => {
    //ki ki ghote ta likbo just dispatch e
    dispatch({
      type:'ADDED',
      text,
      id: getNextId(tasks)
    });
    
    // setTasks([
    //   ...tasks,
    //   {
    //     id: getNextId(tasks),
    //     text: text,
    //     done: false,
    //   },
    // ]);
  };

  const handleChangeTask = (newSingleTask) => {
    dispatch({
      type:'CHANGED',
      task:newSingleTask
      
    })
    // const nextTasks = tasks.map((task) => {
    //   if (task.id === newSingleTask.id) {
    //     return newSingleTask;
    //   } else {
    //     return task;
    //   }
    // });
    // setTasks(nextTasks);
  };

  const handleDeleteTask = (taskId) => {

    dispatch({
      type:'DELETED',
      id:taskId

    });
    // const updatedTask = tasks.filter((task) => task.id !== taskId);
    // setTasks(updatedTask);
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
