import React, { useState, Fragment } from 'react'
import { Button, Modal, makeStyles } from '@material-ui/core'
import database from './firebase'
import './ToDo.scss'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '600px',
    backgroundColor: theme.palette.background.paper,
    color: '#111',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: theme.shadows[5],
    padding: '4rem',
    top: '50%',
    left: '50%',
    transform: 'translate(-51%,-60%)',
    outline: '0',
    borderRadius: '5px',
  },
}))

export default function ToDo({ todo }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState()

  const updateTodo = () => {
    database.collection('todos').doc(todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    )
    setOpen(false)
  }
  return (
    <Fragment>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={open}
        onClose={(e) => setOpen(false)}
        className='modal'
        aria-labelledby='modal'
        aria-describedby='modal'>
        <div className={classes.paper}>
          <h2>Edit Todo</h2>
          <input placeholder={todo.todo} type='text' value={input} onChange={(e) => setInput(e.target.value)} />
          <Button onClick={updateTodo}>Update To Do</Button>
        </div>
      </Modal>
      <div className='todo'>
        <div>
          <h3> {todo.todo}</h3>
        </div>
        <Button variant='contained' className='list__button' onClick={(e) => setOpen(true)}>
          Edit
        </Button>
        <Button
          variant='contained'
          className='list__button'
          onClick={(e) => database.collection('todos').doc(todo.id).delete()}>
          Delete
        </Button>
      </div>
    </Fragment>
  )
}
