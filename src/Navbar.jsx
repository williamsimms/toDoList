import React from 'react'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <ClearAllIcon className='navbar__logoIcon' />
      <ul className='navbar__list'>
        <li>To Do List</li>
        <li>About</li>
      </ul>
    </nav>
  )
}
