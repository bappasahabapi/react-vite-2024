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