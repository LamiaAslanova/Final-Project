import React from 'react'
import Card from './Card'
import './International.css'
import { Link } from 'react-router-dom'

const International = () => {
  return (
    <div className="international">
        <div className="custom-container international__cont">
            <div className="row international__title">
                <div className="col-12 international__title__col">
                    <h2>International touring exhibitions</h2>
                    <Link className='see__ex'>Browse all international touring exhibitions<i class="fa-solid fa-circle-chevron-right"></i></Link>
                </div>
            </div>
            <div className="row international__cards">
                <Card />
            </div>
        </div>
    </div>
  )
}

export default International