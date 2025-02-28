import { useState } from 'react'
import UserList from './components/Task1'
import TodoForm from './components/Todoform'
import TodoList from './components/TodoList'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Task 1.2 Problem solving</h2>
    <UserList></UserList>

    <br />
    <br />

    <h2>Task 1.3 coding</h2>
    <Counter></Counter>
    
   <br/>
   <br />
    <h2>Section 4 Full Stack Intergration</h2>

    <h1>Todo List App</h1>
            <TodoForm fetchTodos={() => {}} />
            <TodoList />
      
    </>
  )
}

export default App
