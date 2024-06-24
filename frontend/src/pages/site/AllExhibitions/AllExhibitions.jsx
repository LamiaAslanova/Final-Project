import React, { useContext } from 'react'
import './AllExhibitions.css'
import Card from './Card'
import MainContext from '../../../context/context'

const AllExhibitions = () => {

    const {exhibitions, setExhibitions} = useContext(MainContext)

    return (
        <div className="allEx">
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
            <div className="custom-container allEx__cards__cont">
                <div className="row allEx__cards">
                    {
                        exhibitions.map((exhibition, index) => {
                            return(
                                <Card key={index} exhibition={exhibition}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AllExhibitions