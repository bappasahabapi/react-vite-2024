
import './App.css'
import Gallery from './Example1'
import Gallery2 from './Example2'
import Gallery3 from './Example3'
import TodoClass from './Todo/TodoClass'
import Todo from './Todo/TodoFunction'
import RefactorTodo from './Todo/TodoRefactor'
import TodoUser from './Todo/TodoUser'


function App() {

  return (
    <div >
      <h3>Type-1</h3>
      <div style={{display:'flex', gap:'20px', width:'100%'}}>
      <Gallery/> 
      <Gallery2/> 
      <Gallery3/>
      </div>
      <br />
      <h3>Type-2</h3>
      <b> Class and Functional</b>
      <div style={{display:'flex', gap:'20px', width:'100%'}}>
        <TodoClass/>
        <Todo/>
        <RefactorTodo/>
        <TodoUser/>
      </div>
 
       
    </div>
  )
}

export default App
