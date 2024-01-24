##    Basic vite 

`npm run dev`

## Using useState() Hook.

- State is maintained like this.


<b>1. initialTasks</b> which is array of objects `[{}, {}, {}]`

```javascript

export const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
];


```
<b>2. Call the useState hook, </b> where tasks = initialTasks. `[{}, {}, {}]`

```javascript

 const [tasks, setTasks] = useState(initialTasks);
```
<b>3. How to update this state using useState Hook</b>

- <b>handleAddTask</b>

```javascript
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

```
- <b>handleChangeTask</b> or update task

```javascript
  const handleChangeTask = (newSingleTask) => {
    // console.log(newSingleTask);
    // setTasks([]) --> ekaneo amra new array diye pathalab map use kore. js main array k mutated kore nai
    const nextTasks = tasks.map((task) => {
      if (task.id === newSingleTask.id) {
        return newSingleTask;
      } else {
        return task;
      }
    });
    setTasks(nextTasks);
  };

```
- <b>handleDeleteTask</b>

```javascript
  const handleDeleteTask = (taskId) => {
    const updatedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTask);
  };

```

## Replace useState to useReducer 

open `App.jsx` file to see the changes

- Change all `setState` to `dispach({ })`

    - আমি যা করতে চাচ্ছি, সেটা শুধুমাত্র `প্রেরণ(dispatch) `করা। `App.jsx` file e


```javascript
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks,dispatch]=useReducer(taskReducer,initialTasks)

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
```
- Make a reducer function where our business logic will

```javascript
//tasks ekane se argument hisebe nibe
// here action mean full objects
/* 
{
      type:'ADDED',
      text,
      id: getNextId(tasks)
}
   */

export default function taskReducer(tasks, action) {
    switch (action.type) {
        case 'ADDED': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ]
        }
        case 'CHANGED': {

            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'DELETED': {
            return tasks.filter((task) => task.id !== action.id);
            
        }
        default: {
            throw Error(`Unknown action type ${action.type}`);
        }

    }
}
````
