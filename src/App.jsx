import React, { useState, useEffect } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import ToDo from './ToDo'
import database from './firebase'
import firebase from 'firebase'
import './App.scss'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  useEffect(() => {
    database
      .collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs.map((doc) => doc.data().todo))
        setTodos(snapshot.docs.map((doc) => doc.data().todo))
      })
  }, [])

  const addTodo = (e) => {
    e.preventDefault()
    database.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
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
