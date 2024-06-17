import React from 'react'
import './Guided.css'
import Card from './Card'
import { Link } from 'react-router-dom'

const Guided = () => {
  return (
    <div className="guided">
            <div className="custom-container guided__cont">
                <div className="row guided__title">
                    <div className="col-12 guided__title__col">
                        <h2>Guided tours</h2>
                        <Link className='see__ex'>Browse all guided talks and tours<i class="fa-solid fa-circle-chevron-right"></i></Link>
                    </div>
                </div>
                <div className="row guided__cards">
                    <Card />
                </div>
            </div>
        </div>
  )
}

export default Guided