import React from 'react'
import ClearAllIcon from '@material-ui/icons/ClearAll'
import './Navbar.scss'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar({ isToDo }) {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <Link to='/'>
          <ClearAllIcon className='navbar__logoIcon' />
        </Link>
        <ul className='navbar__list'>
          <li className='navbar__listItem'>
            <NavLink exact to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='navbar__listItem'>
            <NavLink to='/todo' activeClassName='active'>
              To Do List
            </NavLink>
          </li>
          <li className='navbar__listItem'>
            <NavLink to='/about' activeClassName='active'>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
