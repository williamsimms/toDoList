import React, { useState } from 'react'
import './App.scss'

function App() {
  const [todos, setTodos] = useState(['Take Dogs For A Walk', 'Take Cats For A Walk'])
  const [input, setInput] = useState('')
  const addTodo = () => {
    setTodos((todos) => [input, ...todos])
  }

  return (
    <div className='App'>
      <h1 className='hero-text'>To Do List</h1>
      <input type='text' name='todo' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Todo </button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
