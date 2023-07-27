import React from 'react'
import './Header.css'
import Illustration from '../images/illustration-hero.svg'

function Header() {
  return (
    <div id='header'>
      <div className="hero-title">
        <h1 className='title'>A Simple Bookmark Manager</h1>
        <p className='sub-title'>A clean and simple interface to organize your favorite websites. Open a new browser tab and see yoou sites load instantly. Try it for free.</p>
        <div className="hero-cta">
          <button className='cta'>Get it on Chrome</button>
          <button className='cta'>Get it on Firefox</button>
        </div>
      </div>
      <div className="hero-illustration">
        <img src={ Illustration } alt="Illustration" />
        <div className="hero-bg"></div>
      </div>
    </div>
  )
}

export default Header