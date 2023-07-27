import React from 'react'
import './Extensions.css'
import lChrome from '../images/logo-chrome.svg'
import lFirefox from '../images/logo-firefox.svg'
import lOpera from '../images/logo-opera.svg'
import dot from '../images/bg-dots.svg'

function Extensions() {
  const donwloadInfo = [
    {
      title: 'Chrome',
      version: '62',
      logo: lChrome
    },
    {
      title: 'Firefox',
      version: '55',
      logo: lFirefox
    },
    {
      title: 'Opera',
      version: '46',
      logo: lOpera
    }
  ]

  return (
    <div id='extensions'>
        <h3 className='xt-title'>Download the extension</h3>
        <p className='xt-sub-title'>We've got more browsers in the pipeline. Please do let us know if you've get a favourite you'd like us to prioritize.</p>
        <div className="download-cards">
          { donwloadInfo.map((dl, i)=>(
            <div className="card" key={i}>
              <div className="browser">
                <img src={ dl.logo } alt="Logo" className='browser-logo' />
                <p className='browser-name'>Add to {dl.title}</p>
                <p className='version'>Minimum version {dl.version}</p>
              </div>
              <img src={ dot } alt=" . . . . .  . . . . . ." />
              <button className='install'>Add & install Extension</button>
            </div>
          )) }
        </div>
    </div>
  )
}

export default Extensions