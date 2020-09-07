import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@material-ui/core'
import ToDo from './ToDo'
import database from './firebase'
import firebase from 'firebase'
import './List.scss'

export default function List() {
  const errorTextRef = useRef(null)

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
    if (input.length < 1) {
      errorTextRef.current.style.display = 'block'

      setTimeout(() => {
        errorTextRef.current.style.display = 'none'
      }, 3000)
    } else {
      database.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      setInput('')
    }
  }

  return (
    <div className='list'>
      <h1 className='hero-text'>To Do List</h1>
      <p className='list__errorText' ref={errorTextRef}>
        Please enter something before trying to add a Todo.
      </p>
      <form>
        <input
          color='secondary'
          type='text'
          name='todo'
          value={input}
          onChange={(e) => setInput(e.target.value)}></input>

        <Button className='list__button' variant='contained' type='submit' onClick={addTodo}>
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
