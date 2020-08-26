import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

export default function ToDo({ text }) {
  return (
    <div className='todo'>
      <List>
        <ListItem>
          <ListItemText primary='To Do' secondary={text} />
        </ListItem>
      </List>
    </div>
  )
}
