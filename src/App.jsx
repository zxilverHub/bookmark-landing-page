import React from 'react'
import './App.css'
import { Header, Features, Extensions, FAQ, FooterNav, Contact, Nav } from './Index'

function App() {
  return (
    <div className='contianer'>
      < Nav />
      < Header />
      < Features />
      < Extensions />
      < FAQ />
      < Contact />
      < FooterNav />
    </div>
  )
}

export default App