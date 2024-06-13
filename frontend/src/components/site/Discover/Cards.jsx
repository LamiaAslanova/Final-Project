import React from 'react'
import Card from './Card'


const Cards = () => {
    return (
        <div className="custom-container discover__bottom">
            <div className="row discover__bottom__title">
                <div className="col-12">
                    <h2>Exhibitions and events</h2>
                </div>
            </div>
            <div className="row discover__bottom__cards">
                <Card />
            </div>
        </div>
    )
}

export default Cards