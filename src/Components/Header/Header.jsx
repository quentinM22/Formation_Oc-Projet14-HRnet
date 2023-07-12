import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
      
        {window.location.pathname === "/" ? (
          <>
          <h1>HR<span>net</span></h1>
          <nav>
             <NavLink to="/employee">
        View Current Employees <hr /></NavLink>
          </nav>
          </>
       
        ) : (
        <nav>
          <NavLink to="/" >Home <hr /></NavLink>
          </nav>
        )}

      
    </header>
  )
}

export default Header