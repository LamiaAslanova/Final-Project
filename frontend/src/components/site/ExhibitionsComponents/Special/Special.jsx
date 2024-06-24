import React, { useContext } from 'react'
import './Special.css'
import Card from './Card'
import { Link } from 'react-router-dom'
import MainContext from '../../../../context/context'

const Special = () => {

    const { exhibitions } = useContext(MainContext)

    return (
        <div className="special">
            <div className="custom-container special__cont">
                <div className="row special__title">
                    <div className="col-12 special__title__col">
                        <h2>Special exhibitions</h2>
                        <Link to='/all-exhibitions' className='see__ex'>Browse all exhibitions<i class="fa-solid fa-circle-chevron-right"></i></Link>
                    </div>
                </div>
                <div className="row special__cards">
                    {
                        exhibitions.filter(item => item.category === 'Special').slice(0, 3).map(exhibition => {
                            return (
                                <Card exhibition={exhibition} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Special