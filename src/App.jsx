import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import ToDo from './ToDo'
import './App.scss'

function App() {
  const [todos, setTodos] = useState(['Take Dogs For A Walk', 'Take Cats For A Walk'])
  const [input, setInput] = useState('')
  const addTodo = (e) => {
    e.preventDefault()
    setTodos([input, ...todos])
    setInput('')
  }

  return (
    <div className='App'>
      <h1 className='hero-text'>To Do List</h1>
      <form>
        <FormControl>
          <InputLabel>Add To Do</InputLabel>
          <Input type='text' name='todo' value={input} onChange={(e) => setInput(e.target.value)}></Input>
        </FormControl>
        <Button disabled={!input} variant='contained' color='secondary' type='submit' onClick={addTodo}>
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <ToDo text={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
