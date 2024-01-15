/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

export default function TaskBoard() {
  //json
  //   const defaultTask ={
  //       "id":crypto.randomUUID(),
  //       "title": "This is test title one",
  //       "description":"There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa",
  //       "tags":["web","js"],
  //       "priority":"High",
  //       "isFavorite":true
  //   }
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "This is test title one",
    description:
      "There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa",
    tags: ["web", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditTask(newTask, isAdd) {
    console.log("Adding a task ", newTask);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  }

  function handleEditTask(editTask) {
    console.log("Editing a task ", editTask);
    setTaskToUpdate(editTask);
    setShowAddModal(true);
  }

  function handleCloseClick() {
    setShowAddModal(false)
    setTaskToUpdate(null)
  }

  function handleDeleteTask(taskId){
    const taskAfterDelete =tasks.filter(task=>task.id !== taskId)
    setTasks(taskAfterDelete)
  }

  return (
    <div>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            onSave={handleAddEditTask}
            taskToUpdate={taskToUpdate}
            onCloseClick={handleCloseClick}
          />
        )}
        <div className="container">
          <SearchTask />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddClick={() => setShowAddModal(true)} />
            <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
          </div>
        </div>
      </section>
    </div>
  );
}
