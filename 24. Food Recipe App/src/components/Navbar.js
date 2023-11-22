import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar container'>
      <a href='#!' className='logo'>
        F<span>oo</span>diesHub
      </a>
      <div className='nav-links'>
        <a href='#!'>Home</a>
        <a href='#!'>Recipes</a>
        <a href='#!'>Settings</a>
      </div>
    </div>
  )
}

export default Navbar
