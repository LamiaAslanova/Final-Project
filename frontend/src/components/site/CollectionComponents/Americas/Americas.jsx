import React from 'react'
import './Americas.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Photo1 from '../../../../assets/images/americas.jpg'
import { Link } from 'react-router-dom'
import legion from  '../../../../assets/images/Legion.jpg'

const Americas = () => {
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
            // {
            //     breakpoint: 993,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //         initialSlide: 2,
            //         infinite: false,
            //         dots: true
            //     }
            // },
            // {
            //     breakpoint: 769,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         initialSlide: 1,
            //         infinite: false,
            //         dots: true
            //     }
            // },
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
        <div className="americas">
            <div className="custom-container americas__cont">
                <div className="row americas__title">
                    <div className="col-12 americas__title__col">
                        <h2>Americas</h2>
                        <p>1/10</p>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='single__carousel'>
                        <img src={Photo1} alt="" />
                        <h3>Egypt</h3>
                    </div>
                    <div className='single__carousel'>
                        <img src={legion} alt="" />
                        <h3>Egypt</h3>
                    </div>
                    <div className='single__carousel'>
                        <img src={Photo1} alt="" />
                        <h3>Egypt</h3>
                    </div>
                    <div className='single__carousel'>
                        <img src={Photo1} alt="" />
                        <h3>Egypt</h3>
                    </div>
                    <div className='single__carousel'>
                        <img src={Photo1} alt="" />
                        <h3>Egypt</h3>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Americas