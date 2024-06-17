import React from 'react'
import Card from './Card'
import './Highlight.css'

const Highlight = () => {
    return (
        <div className="highlight">
            <div className="custom-container highlight__cont">
                <div className="row highlight__title">
                    <div className="col-12 highlight__title__col">
                        <h2>Highlight events</h2>
                    </div>
                </div>
                <div className="row highlight__cards">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Highlight