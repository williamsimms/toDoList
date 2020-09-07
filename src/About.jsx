import React from 'react'
import './About.scss'

export default function About() {
  return (
    <div className='about'>
      <div className='container'>
        <h1>About</h1>
        <h5>
          The Github Repository for this Todo List can be seen here{' '}
          <a href='https://github.com/williamsimms/toDoList'>Todo App.</a>
        </h5>
        <h5>This Todo app was made Using Firebase and React JS.</h5>
        <h5>This Todo App was made by William Simms</h5>
        <h5>
          <a href='https://twitter.com/wijlum'>Twitter</a>
        </h5>
        <h5>williamsimms193@gmail.com</h5>
      </div>
    </div>
  )
}
