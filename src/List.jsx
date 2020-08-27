import React, { useState, useEffect } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import ToDo from './ToDo'
import database from './firebase'
import firebase from 'firebase'
import './List.scss'

export default function List() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  useEffect(() => {
    database
      .collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })))
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
    <div className='list'>
      <h1 className='hero-text'>To Do List</h1>
      <form>
        <FormControl className='list__formControl'>
          <InputLabel>Add To Do</InputLabel>
          <Input
            color='secondary'
            type='text'
            name='todo'
            value={input}
            onChange={(e) => setInput(e.target.value)}></Input>
        </FormControl>
        <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={addTodo}>
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <ToDo todo={todo} />
        ))}
      </ul>
    </div>
  )
}
