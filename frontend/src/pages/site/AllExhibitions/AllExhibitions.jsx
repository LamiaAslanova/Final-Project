import React, { useContext } from 'react'
import './AllExhibitions.css'
import Card from './Card'
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const AllExhibitions = () => {

    const { exhibitions, shuffleArray } = useContext(MainContext)

    return (
        <div className="allEx">
            <Helmet>
                <title>All exhibitions | British Museum</title>
            </Helmet>
            <div className="custom-container allEx__cont">
                <div className="row allEx__title__row">
                    <div className="col-12 allEx__title__col">
                        <h1>Exhibitions</h1>
                        <div className="search">
                            <input type="text" placeholder='What are you looking for?' />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="results">
                <div className="custom-container results__cont">
                    <div className="row results__row">
                        <div className="col-12 results__col">
                            <p>Showing results for:</p>
                            <Link to='/exhibitions-events'>
                                <i class="fa-solid fa-circle-xmark"></i>
                                <span>All exhibitions</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-container allEx__cards__cont">
                <div className="row allEx__cards">
                    {
                        shuffleArray(exhibitions).map((exhibition, index) => {
                            return (
                                <Card key={index} exhibition={exhibition} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AllExhibitions