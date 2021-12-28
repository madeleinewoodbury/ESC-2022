import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/auth'
import { Link } from 'react-router-dom'
import logo from '../../img/logo-2021.svg'
import './Navbar.css'

const Navbar = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const { isAuthenticated, loading, user } = auth
  const [viewMenu, toggleViewMenu] = useState(false)

  const handleLogout = (e) => {
    window.innerWidth <= 1024 && toggleViewMenu(!viewMenu)
    dispatch(logout())
  }

  const handleClick = (e) => {
    window.innerWidth <= 1024 && toggleViewMenu(!viewMenu)
  }

  const authLinks = (
    <ul className='nav-links'>
      <li>
        |
        <Link onClick={(e) => handleClick(e)} to='/dashboard' title='Dashboard'>
          <i className='fas fa-user'></i>
          <span className='hide-md'>
            {user && user.name.trim().split(' ')[0]}
          </span>
        </Link>
      </li>
      <li>
        <Link onClick={(e) => handleLogout(e)} to='#!'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-md'>Logout</span>
        </Link>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul className='nav-links'>
      <li>
        <Link onClick={(e) => handleClick(e)} to='/register'>
          Register
        </Link>
      </li>
      <li>
        <Link onClick={(e) => handleClick(e)} to='/login'>
          Login
        </Link>
      </li>
    </ul>
  )

  return (
    <Fragment>
      <div className='navbar-behind'></div>
      <nav className='navbar'>
        <div className='logo'>
          <Link onClick={(e) => handleClick(e)} to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <label className='menu-toggle' htmlFor='toggle'>
          &#9776;
        </label>
        <input
          className='menu-checkbox'
          type='checkbox'
          id='toggle'
          checked={viewMenu}
          onChange={(e) => handleClick(e)}
        />
        <div className='links-container menu'>
          <ul className='nav-links'>
            {/* <li>
              <Link onClick={(e) => handleClick(e)} to='/'>
                Home
              </Link>
            </li> */}
            <li>
              <Link onClick={(e) => handleClick(e)} to='/participants'>
                Participants
              </Link>
            </li>
            <li>
              <Link onClick={(e) => handleClick(e)} to='/countries'>
                Countries
              </Link>
            </li>
            <li>
              <Link onClick={(e) => handleClick(e)} to='/competitions'>
                Competitions
              </Link>
            </li>
            <li>
              <Link onClick={(e) => handleClick(e)} to='/winners'>
                Winners
              </Link>
            </li>
            <li>
              <Link onClick={(e) => handleClick(e)} to='/about'>
                About
              </Link>
            </li>
            <li>
              <Link onClick={(e) => handleClick(e)} to='/history'>
                History
              </Link>
            </li>
          </ul>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
