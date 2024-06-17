import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Top.css'
import photo1 from '../../../../assets/images/Mick.jpg'
import photo2 from '../../../../assets/images/Legion.jpg'
import photo3 from '../../../../assets/images/cat.jpg'
import icon1 from '../../../../assets/images/package-icon.png'
import icon2 from '../../../../assets/images/truck-icon.png'
import icon3 from '../../../../assets/images/bank.png'

const Top = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (
    <div className="top">
      <div className="custom-container top__mini__cont">
        <div className="row top__mini__row">
          <div className="col-12 top__mini__col">
          <div className="delivery">
            <div className="delivery__piece">
              <img src={icon1} alt="" />
              <span>Our postage charges include all customs and import duties</span>
            </div>
            <div className="delivery__piece">
              <img src={icon2} alt="" />
              <span>Our postage charges include all customs and import duties</span>
            </div>
            <div className="delivery__piece">
              <img src={icon3} alt="" />
              <span>Our postage charges include all customs and import duties</span>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="custom-container top__cont">
        <div className="row top__row">
              <div className="slider-container">
                <Slider {...settings}>
                  <div className='slide__component'>
                    <img src={photo1} alt="" />
                    <div className="slide__component__content">
                      <h4>Michelangelo: the last decades</h4>
                      <p>Browse art-inspired gifts from the exhibition</p>
                    </div>
                  </div>
                  <div className='slide__component'>
                    <img src={photo2} alt="" />
                    <div className="slide__component__content">
                      <h4>Life in the Roman army</h4>
                      <p>Immerse yourself in the world of ancient Rome with gifts from the exhibition</p>
                    </div>
                  </div>
                  <div className='slide__component'>
                    <img src={photo3} alt="" />
                    <div className="slide__component__content">
                      <h4>Find the purr-fect gift</h4>
                      <p>Browse fashion, homeware, books and more celebrating cats throughout history</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Top