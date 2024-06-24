import React, { useContext } from 'react'
import './Guided.css'
import Card from './Card'
import MainContext from '../../../../context/context'

const Guided = () => {

    const { events } = useContext(MainContext)

    return (
        <div className="guided">
            <div className="custom-container guided__cont">
                <div className="row guided__title">
                    <div className="col-12 guided__title__col">
                        <h2>Guided tours</h2>
                    </div>
                </div>
                <div className="row guided__cards">
                    {
                        events.filter(item => item.category === 'Guided tour').slice(0, 3).map(event => {
                            return (
                                <Card event={event} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Guided