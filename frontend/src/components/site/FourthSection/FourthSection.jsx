import React from 'react'
import './FourthSection.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Photo1 from '../../../assets/images/Photo4-1.png'

const FourthSection = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="fourth__section">
            <div className="custom-container">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='single__item'>
                            <img src={Photo1} alt="" />
                        </div>
                        <div className='single__item'>
                            <img src={Photo1} alt="" />
                        </div>
                        <div className='single__item'>
                            <img src={Photo1} alt="" />
                        </div>
                        <div className='single__item'>
                            <img src={Photo1} alt="" />
                        </div>
                        <div className='single__item'>
                            <img src={Photo1} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default FourthSection