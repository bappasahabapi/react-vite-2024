// const [todo,setTodo]=useState('') -> this returns an array 

let states =[];  // [0:[value,setterFn], ]
let stateIndex =-1;
function useState(defaultValue){

    const localIndex =++stateIndex; // make -1 to 0 index

    if(states[localIndex]){
        return states[localIndex];
    }

    const setValue =(newValue)=>{
        states[localIndex][0]=newValue;
        renderFn()
    }

    const returnArray =[defaultValue, setValue];
    states[localIndex]=returnArray;

    return returnArray;

}