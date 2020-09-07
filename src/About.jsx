import React, { useEffect } from 'react'
import './About.scss'

export default function About() {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'
  }, [])

  return (
    <div className='about'>
      <div className='container'>
        <h1>About</h1>
        <h5>
          The Github Repository for this Todo List can be seen here{' '}
          <a href='https://github.com/williamsimms/toDoList'>Todo App.</a>
        </h5>
        <h5>This Todo app was made using Firebase and React JS.</h5>
        <h5>
          This Todo app was made by <span className='about__span'>William Simms</span>
        </h5>
        <h5>
          <a href='https://twitter.com/wijlum'>Twitter</a>
        </h5>
        <h5>williamsimms193@gmail.com</h5>
      </div>
    </div>
  )
}
