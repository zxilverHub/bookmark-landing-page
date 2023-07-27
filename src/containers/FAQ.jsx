import React, { useReducer, useState } from 'react'
import './FAQ.css'
import arrow from '../images/icon-arrow.svg'

function reducer(spands, action) {
  switch(action.type) {
    case 1:
      return { ...spands, faq1: !spands.faq1 }
    case 2:
        return { ...spands, faq2: !spands.faq2 }
    case 3:
      return { ...spands, faq3: !spands.faq3 }
    case 4:
      return { ...spands, faq4: !spands.faq4 }
    default:
      return { ...spands }
  }
}

function FAQ() {
  const [spands, dispatch] = useReducer(reducer, { faq1: false, faq2: false, faq3: false, faq4: false })

  const faqs = [
    {
      id: 1,
      spand: spands.faq1,
      question: 'What is Bookmark?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
    },
    {
      id: 2,
      spand: spands.faq2,
      question: 'How can I request a new browser?',
      answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
    },
    {
      id: 3,
      spand: spands.faq3,
      question: 'Is there a mobile app?',
      answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
    },
    {
      id: 4,
      spand: spands.faq4,
      question: 'What about other Chromium browsers?',
      answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
    }
  ]

  const spandFAQ = (id) => {
    dispatch({type: id})
  }

  return (
    <div id='faq'>
        <div className="faq-title">
          <h4 className='faq-main-title'>Frequently Asked Questions</h4>
          <p className='faq-sub-title'>Here are some og our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
        </div>
        <div className="faq-toggles">
          { faqs.map((faq)=>(
            <div key={faq.id} className="faq-card">
              <p className='question' onClick={()=>spandFAQ(faq.id)}>
                { faq.question } 
                <span> <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="18" height="12" transform={ (faq.spand ? 'rotate(-180)': 'rotate(-0)') }><path fill="none" stroke={( faq.spand? "var(--soft-red)": "#5267DF" )}strokeWidth="3" d="M1 1l8 8 8-8"/></svg> </span> 
              </p>
              { faq.spand &&
              <p className='answer'> { faq.answer } </p>
              }
              </div>
          )) }
        </div>
        <button className='more-info'>More info</button>
    </div>
  )
}

export default FAQ