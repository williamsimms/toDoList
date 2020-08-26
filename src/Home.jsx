import React from 'react'
import Navbar from './Navbar'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import { Button } from '@material-ui/core'
import './Home.scss'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className='home__content'>
        <FormatListNumberedIcon className='home__icon' />
        <h1>To Do List</h1>
        <Link to='/todo'>
          <Button variant='contained' className='home__button'>
            Use To Do List
          </Button>
        </Link>
      </div>
    </div>
  )
}
