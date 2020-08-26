import React from 'react'
import Navbar from './Navbar'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import './Home.scss'

export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className='home__content'>
        <FormatListNumberedIcon className='home__icon' />
        <h1>To Do List</h1>
      </div>
    </div>
  )
}
