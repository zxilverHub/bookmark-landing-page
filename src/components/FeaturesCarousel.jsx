import React, { useState } from 'react'
import Illustration1 from '../images/illustration-features-tab-1.svg'
import Illustration2 from '../images/illustration-features-tab-2.svg'
import Illustration3 from '../images/illustration-features-tab-3.svg'

function FeaturesCarousel() {
    const [currentContent, setCurrentContent] = useState(0)

    const carouselContent = [
        { 
            illustration: Illustration1,
            content: {
                title: 'Bookmark in one click',
                subTitle: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your facvourite sites.'
            }
        },
        {
            illustration: Illustration2,
            content: {
                title: 'Intelligent search',
                subTitle: 'Our powerful search feaeture will help you find saved sites in no time at all. No need to trawl thorugh all of you bookmarks.'
            }
        },
        {
            illustration: Illustration3,
            content: {
                title: 'Share your bookmarks',
                subTitle: 'Easy share your bookmarks and collections with others. Create a shareable line that you can send at the click of a button.'
            }
        }
    ]

  return (
    <div className='features-carousel'>
        <div className="features-buttons">
            <button onClick={()=>setCurrentContent(0)}>
                Simple Bookmarking
            { currentContent == 0 && <span className='active-content'></span> }
            </button>
            <button onClick={()=>setCurrentContent(1)}>
                Speedy Searchig
            { currentContent == 1 && <span className='active-content'></span> }
            </button>
            <button onClick={()=>setCurrentContent(2)}>
                Easy Sharing
            { currentContent == 2 && <span className='active-content'></span> }
            </button>
        </div>

        <div className="featured">
            <img src={ carouselContent[currentContent].illustration } alt="Illustration" />
            <div className="content">
                <p className='content-title'>{carouselContent[currentContent].content.title}</p>
                <p className='content-sub-title'>{carouselContent[currentContent].content.subTitle}</p>
                <button className='more-info'>More info</button>
            </div>
        </div>
        <div className="features-bg"></div>
    </div>
  )
}

export default FeaturesCarousel