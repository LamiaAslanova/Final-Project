import React from 'react'
import './ExHero.css'
import { Link } from 'react-router-dom'

const ExHero = () => {
  return (
    <div className="exHero">
      <div className="exHero__main">
        <div className="custom-container exHero__cont">
          <div className="row exHero__row">
            <div className="exHero__content">
              <h1>Michelangelo
                the last decades</h1>
              <span className='exHero__content__span'>Exhibition / 2 May - 28 July 2024</span>
              <Link>
                <span>Book tickets</span>
                <i class="fa-solid fa-circle-chevron-right"></i>
              </Link>
              <span className='exHero__content__span'>Supported by</span>
              <p>James Bartos, Dunard Fund and a gift in memory of Melvin R. Seiden</p>
              <span className='exHero__content__span'>With additional support from</span>
              <p>The Cosman Keller Art and Music Trust, The Vaseppi Trust, the Italian Cultural Institute and The Gladys Krieble Delmas Foundation</p>
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
                <p>Title</p>
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