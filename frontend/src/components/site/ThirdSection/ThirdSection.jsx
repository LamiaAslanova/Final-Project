import React from 'react'
import { Link } from 'react-router-dom'
import './ThirdSection.css'

const ThirdSection = () => {
  return (
    <div className="third__section">
      <div className="third__section__div">
        <div className='third__section__div__left'>
          <h2>Sign up to our newsletters</h2>
        </div>
        <div className='third__section__div__right'>
          <p>Stay connected to the British Museum for the latest news, stories, exhibitions, events and visitor information.</p>
          <Link>
            <span>Sign up</span>
            <i class="fa-solid fa-circle-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection