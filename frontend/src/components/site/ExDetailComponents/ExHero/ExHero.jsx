import React from 'react'
import './ExHero.css'
import { Link } from 'react-router-dom'

const ExHero = ({ item }) => {
  return (
    <div className="exHero" style={{ backgroundImage: `url(${item.image})` }}>
      <div className="exHero__main">
        <div className="custom-container exHero__cont">
          <div className="row exHero__row">
            <div className="col-12 exHero__col">
              <div className="exHero__content">
                <h1>{item.title}</h1>
                <span className='exHero__content__span'>Exhibition / {item.date}</span>
                <Link>
                  <span>Book tickets</span>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </Link>
                <span className='exHero__content__span'>Supported by</span>
                <p>{item.suppBy}</p>
                <span className='exHero__content__span'>With additional support from</span>
                <p className='content__last__p'>{item.additionalSuppBy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exHero__mini">
        <div className="custom-container exHero__mini__cont">
          <div className="row exHero__mini__row">
            <div className="col-12 exHero__mini__col">
              <div className="exHero__mini__left">
                <Link to='/'>Home</Link>
                <i class="fa-solid fa-chevron-right"></i>
                <Link to='exhibitions'>Exhibitions and events</Link>
                <i class="fa-solid fa-chevron-right"></i>
                <p>{item.title}</p>
              </div>
              <div className="exHero__mini__right">
                <p>Share the page</p>
                <ul>
                  <li><Link><i class="fa-brands fa-facebook-f"></i></Link></li>
                  <li><Link><i class="fa-brands fa-x-twitter"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExHero