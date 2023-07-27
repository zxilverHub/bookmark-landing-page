import React from 'react'
import { FeaturesCarousel } from '../Index'
import './Features.css'

function Features() {

  return (
    <div id='features'>
        <div className="features-title">
          <h2 className='f-title'>Features</h2>
          <p className='f-sub-title'>Our aim is to make it quick and easy for you to acces your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <FeaturesCarousel />
    </div>
  )
}

export default Features