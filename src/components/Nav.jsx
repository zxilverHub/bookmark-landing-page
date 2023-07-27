import React, { useState } from 'react'
import './Nav.css'
import Logo from '../images/logo-bookmark.svg'
import Hamburger from '../images/icon-hamburger.svg'
import Close from '../images/icon-close.svg'

const Menu = () => (
    <>
        <li><a href="#features">FEATURES</a></li>
        <li><a href="#extensions">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li>LOGIN</li>
    </>
)

function Nav() {
    const [spand, setSpand] = useState(false)

    const mobile = {
        height: spand ? '100%' : '0',
        padding: spand ? '0 2rem 2rem 2rem': '0'
    }

  return (
    <nav>
        <img src={Logo} alt="BOOKMaRK" />

        <ul className='desktop-nav'>
            <Menu />
        </ul>

        <ul className='mobile-nav' style={mobile} onClick={()=>setSpand(false)}>
            <Menu />
        </ul>

        <img src={ spand?Close:Hamburger } alt="=" className='menu-button' onClick={()=>setSpand(!spand)} />

    </nav>
  )
}

export default Nav