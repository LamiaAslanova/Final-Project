import React, { useContext } from 'react'
import './Explore.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Photo1 from '../../../../assets/images/Photo4-1.png'
import { Link } from 'react-router-dom'
import MainContext from '../../../../context/context'

const Explore = ({ collections }) => {

    const {shuffleArray} = useContext(MainContext)

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
                breakpoint: 1201,
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
            <div className="custom-container explore__cont">
                <div className="row explore__title">
                    <div className="col-12 explore__title__col">
                        <h2>Explore the collection</h2>
                        <Link to='collection' className='see__all'><p>See all</p><i class="fa-solid fa-circle-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        shuffleArray(collections).map((collection, index) => {
                            return (
                                <div key={index} className='single__item'>
                                    <h3>{collection.category}</h3>
                                    <img src={collection.image} alt="" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <Link to='collection' className='see__all__button'>
                <span>See all</span>
                <i class="fa-solid fa-circle-chevron-right"></i>
            </Link>
        </div>
    );
}

export default Explore