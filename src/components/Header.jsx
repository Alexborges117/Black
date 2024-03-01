import React from 'react'
import './Header.css'
import Logo from '../img/Logo.svg'

const Header = () => {
  return (
    <div className='Main'> 
        <div className="Header">
            <img src={Logo} alt="Logo Black Jack" />
        </div>
    </div>
  )
}

export default Header