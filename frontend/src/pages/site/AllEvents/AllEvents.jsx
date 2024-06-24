import React, { useContext } from 'react'
import './AllEvents.css'
import Card from './Card'
import MainContext from '../../../context/context'

const AllEvents = () => {

    const {events, setEvents} = useContext(MainContext)

  return (
    <div className="allEv">
            <div className="custom-container allEv__cont">
                <div className="row allEv__title__row">
                    <div className="col-12 allEv__title__col">
                        <h1>Events</h1>
                        <div className="search">
                            <input type="text" placeholder='What are you looking for?' />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-container allEv__cards__cont">
                <div className="row allEv__cards">
                    {
                        events.map((event, index) => {
                            return(
                                <Card key={index} event={event} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default AllEvents