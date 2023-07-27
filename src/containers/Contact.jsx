import React, { useEffect, useState } from 'react'
import './Contact.css'

function Contact() {
  const [email, setEmail] = useState('');
  const [err, setErr] = useState(false)

  const validate = (e) =>{
    setEmail(e.target.value)
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    setErr(!emailRegEx.test(email))
  }

  return (
    <div id='contact'>
      <p className="eye-brow">35,000+ ALREADY JOINED</p>
      <h5 className='contact-title'>Stay up-to-date with what we're doing</h5>
      <div className="form">
        <div className="input">
          <input type="email" placeholder='Enter your email address' 
            className={`email ${(err?'errState':'')}`}
            value={email} onChange={validate}
          />
          { err && <p className='error-msg'>Whoops, make sure it's an email</p> }
        </div>
        <button className='acontact-us' onClick={validate}>Contact Us</button>
      </div>
    </div>
  )
}

export default Contact