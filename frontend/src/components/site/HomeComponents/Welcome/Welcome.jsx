import React from 'react'
import './Welcome.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Photo1 from '../../../../assets/images/Photo5-1.jpg'
import { Link } from 'react-router-dom'

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
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false,
                    dots: true
                }
            },
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
            <div className="custom-container welcome__cont">
                <div className="row welcome__title">
                    <div className="col-12 welcome__title__col">
                        <h2>Welcome to the British Museum Shop</h2>
                        <Link className='shop__now'>Shop now<i class="fa-solid fa-circle-chevron-right"></i></Link>
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
            <Link className='shop__now__button'>
                <span>Shop now</span>
                <i class="fa-solid fa-circle-chevron-right"></i>
            </Link>
        </div>
    );
}

export default Welcome