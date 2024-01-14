import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {

    //json
    const defaultTask ={
        "id":crypto.randomUUID(),
        "title": "This is test title one",
        "description":"There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa There is a dreamy boy whose name is Bappa",
        "tags":["web","js"],
        "priority":"High",
        "isFavorite":true
    }

    const [tasks, setTasks]=useState([defaultTask])
  return (
    <div>
      <section className="mb-20" id="tasks">
        <div className="container">
          <SearchTask />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions />
            <TaskList tasks={tasks}/>
          </div>
        </div>
      </section>
    </div>
  );
}
