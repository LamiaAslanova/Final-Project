import React from 'react'
import './Explore.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Photo1 from '../../../assets/images/Photo4-1.png'

const Explore = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //     }
            // },
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
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ]
    };
    return (
        <div className="explore">
            <div className="custom-container">
                <div className="row explore__title">
                    <div className="col-12">
                        <h2>Explore the collection</h2>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='single__item'>
                        <h3>Egypt</h3>
                        <img src={Photo1} alt="" />
                    </div>
                    <div className='single__item'>
                        <h3>Egypt</h3>
                        <img src={Photo1} alt="" />
                    </div>
                    <div className='single__item'>
                        <h3>Egypt</h3>
                        <img src={Photo1} alt="" />
                    </div>
                    <div className='single__item'>
                        <h3>Egypt</h3>
                        <img src={Photo1} alt="" />
                    </div>
                    <div className='single__item'>
                        <h3>Egypt</h3>
                        <img src={Photo1} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Explore