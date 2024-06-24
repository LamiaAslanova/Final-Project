import React from 'react'
import './EvHero.css'
import { Link } from 'react-router-dom'

const EvHero = ({item}) => {
  return (
    <div className="evHero" style={{ backgroundImage: `url(${item.image})` }}>
      <div className="evHero__main">
        <div className="custom-container evHero__cont">
          <div className="row evHero__row">
            <div className="col-12 evHero__col">
              <div className="evHero__content">
                <h1>{item.title}</h1>
                <span className='evHero__content__span'>{item.type} / {item.date}</span>
                <Link>
                  <span>Book tickets</span>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="evHero__mini">
        <div className="custom-container evHero__mini__cont">
          <div className="row evHero__mini__row">
            <div className="col-12 evHero__mini__col">
              <div className="evHero__mini__left">
                <Link to='/'>Home</Link>
                <i class="fa-solid fa-chevron-right"></i>
                <Link to='exhibitions'>Exhibitions and events</Link>
                <i class="fa-solid fa-chevron-right"></i>
                <p>{item.title}</p>
              </div>
              <div className="evHero__mini__right">
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

export default EvHero