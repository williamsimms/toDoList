import React from 'react'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar({ isToDo }) {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='/'>
          <ClearAllIcon className='navbar__logoIcon' />
        </Link>
        <ul className='navbar__list'>
          <li className='navbar__listItem'>
            <Link to='/todo'>To Do List</Link>
          </li>
          <li className='navbar__listItem'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
