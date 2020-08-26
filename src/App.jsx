import React, { useState } from 'react'
import './App.scss'

function App() {
  const [todos, setTodos] = useState(['Take Dogs For A Walk', 'Take Cats For A Walk'])
  return (
    <div className='App'>
      <h1 className='hero-text'>To Do List</h1>
      <input type='text' name='' id='' />
      <button>Add Todo </button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
