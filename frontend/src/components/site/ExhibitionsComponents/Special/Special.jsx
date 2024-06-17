import React from 'react'
import './Special.css'
import Card from './Card'
import { Link } from 'react-router-dom'

const Special = () => {
  return (
    <div className="special">
        <div className="custom-container special__cont">
            <div className="row special__title">
                <div className="col-12 special__title__col">
                    <h2>Special exhibitions</h2>
                    <Link className='see__ex'>Browse all exhibitions and events<i class="fa-solid fa-circle-chevron-right"></i></Link>
                </div>
            </div>
            <div className="row special__cards">
                <Card />
            </div>
        </div>
    </div>
  )
}

export default Special