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