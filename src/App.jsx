/* eslint-disable no-unused-vars */

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TasksProvider from "./contexts/TaskContext";

function App() {
  return (
    <TasksProvider>
      <h1>Add Your Task </h1>
      <AddTask />
      <hr />
      <TaskList />
    </TasksProvider>
  );
}

export default App;
