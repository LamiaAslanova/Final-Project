import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import './Uk.css'

const Uk = () => {
  return (
    <div className="uk">
        <div className="custom-container uk">
            <div className="row uk__title">
                <div className="col-12 uk__title__col">
                    <h2>UK touring exhibitions</h2>
                    <Link className='see__ex'>Browse all UK touring exhibitions<i class="fa-solid fa-circle-chevron-right"></i></Link>
                </div>
            </div>
            <div className="row uk__cards">
                <Card />
            </div>
        </div>
    </div>
  )
}

export default Uk