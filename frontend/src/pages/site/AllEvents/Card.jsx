import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({event}) => {
    return (
        <Link to={`/event-details/${event._id}`} className="col-4 single__card__col">
            <div className="card single__card">
                <div className="card__top">
                    <img src={event.image} alt="" />
                </div>
                <div className="card-body card__bottom">
                    <div className="card__bottom__top">
                            <div>Book now</div>
                    </div>
                    <div className="card__bottom__bottom">
                        <h3>{event.title}</h3>
                        <p>{event.miniDesc}</p>
                        <Link>
                            <span>Book now</span>
                            <i class="fa-solid fa-circle-chevron-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card