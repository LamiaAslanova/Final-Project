import React from 'react'
import './Free.css'
import Card from './Card'

const Free = () => {
    return (
        <div className="free">
            <div className="custom-container free__cont">
                <div className="row free__title">
                    <div className="col-12 free__title__col">
                        <h2>Free exhibitions and displays</h2>
                    </div>
                </div>
                <div className="row free__cards">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Free