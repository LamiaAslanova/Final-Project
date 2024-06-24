import React from 'react'
import './FreeExHero.css'
import { Link } from 'react-router-dom'

const FreeExHero = ({ item }) => {
  return (
    <div className="freeExHero" style={{ backgroundImage: `url(${item.image})` }}>
      <div className="freeExHero__main">
        <div className="custom-container freeExHero__cont">
          <div className="row freeExHero__row">
            <div className="col-12 freeExHero__col">
              <div className="freeExHero__content">
                <h1>{item.title}</h1>
                <span>Exhibition / {item.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="freeExHero__mini">
        <div className="custom-container freeExHero__mini__cont">
          <div className="row freeExHero__mini__row">
            <div className="col-12 freeExHero__mini__col">
              <div className="freeExHero__mini__left">
                <Link to='/'>Home</Link>
                <i class="fa-solid fa-chevron-right"></i>
                <Link to='exhibitions'>Exhibitions and events</Link>
                <i class="fa-solid fa-chevron-right"></i>
                <p>{item.title}</p>
              </div>
              <div className="freeExHero__mini__right">
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

export default FreeExHero