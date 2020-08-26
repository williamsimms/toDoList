import React, { useState, Fragment } from 'react'
import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core'
import database from './firebase'

export default function ToDo({ todo }) {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div>
          <h1>Modal</h1>
          <button onClick={() => setOpen(false)}>Close</button>
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
