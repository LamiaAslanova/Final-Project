import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'


const Cards = ({exhibitions}) => {
    return (
        <div className="custom-container discover__bottom">
            <div className="row discover__bottom__title">
                <div className="col-12 discover__bottom__title__col">
                    <h2>Exhibitions and events</h2>
                    <Link className='see__ex'>See all exhibitions and events<i class="fa-solid fa-circle-chevron-right"></i></Link>
                </div>
            </div>
            <div className="row discover__bottom__cards">
                <Card />
            </div>
        </div>
    )
}

export default Cards