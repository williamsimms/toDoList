import React from 'react'

export default function ToDo({ text }) {
  return (
    <div className='todo'>
      <li>{text}</li>
    </div>
  )
}
