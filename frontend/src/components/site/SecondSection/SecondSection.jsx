import React from 'react'
import './SecondSection.css'
import Photo1 from '../../../assets/images/Photo2-1.jpg'
import Photo2 from '../../../assets/images/Photo2-2.jpg'
import Photo3 from '../../../assets/images/Photo2-3.jpg'
import Photo4 from '../../../assets/images/Photo2-4.jpg'

const SecondSection = () => {
    return (
        <div className="second__section">
            <div className="custom-container second__section__cont">
                <div className="row second__section__title">
                    <div className="col-12">
                        <h2>Visit the Museum</h2>
                    </div>
                </div>
                <div className="row second__section__cards">
                    <div className="col-3 single__card__col">
                        <div className="single__card">
                            <div className="card__top">
                                <img src={Photo1} alt="" />
                            </div>
                            <div className="card__bottom">
                                <h4>Plan your visit</h4>
                                <p>Book tickets and plan your day including exhibitions, facilities, access, food and travel.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 single__card__col">
                        <div className="single__card">
                            <div className="card__top">
                                <img src={Photo2} alt="" />
                            </div>
                            <div className="card__bottom">
                                <h4>Museum map</h4>
                                <p>Navigate the Museum with ease, using our floor-by-floor plan and discover what not to miss.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 single__card__col">
                        <div className="single__card">
                            <div className="card__top">
                                <img src={Photo3} alt="" />
                            </div>
                            <div className="card__bottom">
                                <h4>Galleries</h4>
                                <p>Walk through two million years of history and culture across more than 50 galleries.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 single__card__col">
                        <div className="single__card">
                            <div className="card__top">
                                <img src={Photo4} alt="" />
                            </div>
                            <div className="card__bottom">
                                <h4>Family visits</h4>
                                <p>From family facilities to activities and events, discover how to enjoy the best experience with kids.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection