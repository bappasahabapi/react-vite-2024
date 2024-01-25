/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import taskReducer from "../reducers/taskReducer";
import { initialTasks } from "../data/tasks";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks(){
    return useContext(TaskContext)
}
export function useTaskDispatch(){
    return useContext(TaskDispatchContext)
}
