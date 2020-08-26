import React from 'react'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ClearAllIcon className='navbar__logoIcon' />
      <ul className='navbar__list'>
        <li className='navbar__listItem'>
          <Link to='/todo'>To Do List</Link>
        </li>
        <li className='navbar__listItem'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}
