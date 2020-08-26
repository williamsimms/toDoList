import React, { useState, Fragment } from 'react'
import { List, ListItem, ListItemText, Button, Modal, makeStyles } from '@material-ui/core'
import database from './firebase'
import './ToDo.scss'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '400',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>Edit Your To Do</h1>
          <input placeholder={todo.todo} type='text' value={input} onChange={(e) => setInput(e.target.value)} />
          <Button onClick={updateTodo}>Update To Do</Button>
        </div>
      </Modal>
      <List className='todo'>
        <ListItem>
          <ListItemText primary='To Do' secondary={todo.todo} />
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
        <Button onClick={(e) => database.collection('todos').doc(todo.id).delete()}>Delete</Button>
      </List>
    </Fragment>
  )
}
