import React, { useContext } from 'react'
import Card from './Card'
import './Highlight.css'
import MainContext from '../../../../context/context'
import { Link } from 'react-router-dom'

const Highlight = () => {

    const {events} = useContext(MainContext)

    return (
        <div className="highlight">
            <div className="custom-container highlight__cont">
                <div className="row highlight__title">
                    <div className="col-12 highlight__title__col">
                        <h2>Highlight events</h2>
                        <Link to='/all-events' className='see__ev'>Browse all events<i class="fa-solid fa-circle-chevron-right"></i></Link>
                    </div>
                </div>
                <div className="row highlight__cards">
                    {
                        events.filter(item=> item.category === 'Highlight').slice(0, 3).map(event=>{
                            return(
                                <Card event={event}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Highlight