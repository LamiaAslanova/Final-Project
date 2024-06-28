import React from 'react'
import './FreeExHero.css'
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const FreeExHero = ({ item }) => {
  return (
    <div className="freeExHero" style={{ backgroundImage: `url(${item.image})` }}>
      <div className="freeExHero__main">
        <div className="custom-container freeExHero__cont">
          <div className="row freeExHero__row">
            <div className="col-12 freeExHero__col">
              <div className="freeExHero__content">
                <h1>{item.title}</h1>
                <span className='freeExHero__content__span'>Exhibition / {item.date}</span>
                <ScrollLink to='freeExBody' smooth={true} duration={500}>
                  <span>Book now</span>
                  <i class="fa-solid fa-circle-chevron-right"></i>
                </ScrollLink>
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
                <RouterLink to='/'>Home</RouterLink>
                <i class="fa-solid fa-chevron-right"></i>
                <RouterLink to='exhibitions'>Exhibitions and events</RouterLink>
                <i class="fa-solid fa-chevron-right"></i>
                <p>{item.title}</p>
              </div>
              <div className="freeExHero__mini__right">
                <p>Share the page</p>
                <ul>
                  <li><RouterLink><i class="fa-brands fa-facebook-f"></i></RouterLink></li>
                  <li><RouterLink><i class="fa-brands fa-x-twitter"></i></RouterLink></li>
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