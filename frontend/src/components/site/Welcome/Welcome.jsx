import React from 'react'
import './Welcome.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Photo1 from '../../../assets/images/Photo5-1.jpg'

const Welcome = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            //   {
            //     breakpoint: 1024,
            //     settings: {
            //       slidesToShow: 3,
            //       slidesToScroll: 3,
            //       infinite: true,
            //       dots: true
            //     }
            //   },
            //   {
            //     breakpoint: 600,
            //     settings: {
            //       slidesToShow: 2,
            //       slidesToScroll: 2,
            //       initialSlide: 2
            //     }
            //   },
            //   {
            //     breakpoint: 480,
            //     settings: {
            //       slidesToShow: 1,
            //       slidesToScroll: 1
            //     }
            //   }
        ]
    };
    return (
        <div className="welcome">
            <div className="custom-container">
                <div className="row welcome__title">
                    <div className="col-12">
                        <h2>Welcome to the British Museum Shop</h2>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='single__item'>
                        <img src={Photo1} alt="" />
                        <h3>Inspired by the Museum</h3>
                    </div>
                    <div className='single__item'>
                        <img src={Photo1} alt="" />
                        <h3>Inspired by the Museum</h3>
                    </div>
                    <div className='single__item'>
                        <img src={Photo1} alt="" />
                        <h3>Inspired by the Museum</h3>
                    </div>
                    <div className='single__item'>
                        <img src={Photo1} alt="" />
                        <h3>Inspired by the Museum</h3>
                    </div>
                    <div className='single__item'>
                        <img src={Photo1} alt="" />
                        <h3>Inspired by the Museum</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Welcome