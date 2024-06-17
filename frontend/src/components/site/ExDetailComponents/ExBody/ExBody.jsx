import React from 'react'
import './ExBody.css'
import { Link } from 'react-router-dom'

const ExBody = () => {
    return (
        <div className="exBody">
            <div className="custom-container exBody__cont">
                <div className="row exBody__row">
                    <div className="col-8 exBody__col8">
                        <h3>
                            In 1534, Michelangelo left Florence for Rome, never to see his native city again. He was 59, which many contemporaries regarded as old, but for Michelangelo this move marked the beginning of a dramatic new chapter which would fundamentally shape his experiences as an artist and as a man.
                        </h3>
                        <p>
                            This exhibition looks at the last 30 years of Michelangelo's remarkable life, when his return to Rome - having been summoned by Pope Clement VII to paint a fresco of the Last Judgment in the Sistine Chapel - brought him new commissions and reunited him with some of his closest friends. Having secured his reputation with works including his famous statue of David, Michelangelo was already the most celebrated artist in Europe. But, rather than resting on his laurels, his Christian faith, intellectual engagement and hope for salvation propelled him to produce some of the most striking works of his career. Forceful preparatory drawings for the Last Judgment as well as the recently conserved Epifania - one of only two surviving cartoons by Michelangelo - show his renewed energy and desire to challenge himself.
                        </p>
                    </div>
                    <div className="col-4 exBody__col4">
                        <div className="exBody__col4__piece" id='topmost'>
                            <div className="piece__top">
                                <i class="fa-solid fa-calendar-days"></i>
                                <p>2 May - 28 July 2024</p>
                            </div>
                            <div className="piece__bottom">
                                <p>Daily: 10.00-17.00 (Fridays 20.30)</p>
                            </div>
                        </div>
                        <div className="exBody__col4__piece">
                            <div className="piece__top">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>Room 35</p>
                            </div>
                            <div className="piece__bottom">
                                <p>The Joseph Hotung Great Court Gallery</p>
                                <Link>Find Room 35</Link>
                            </div>
                        </div>
                        <div className="exBody__col4__piece">
                            <div className="piece__top">
                                <svg fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.906 11.541l3.551 3.553 6.518-6.518-3.553-3.551-6.516 6.516zm14.198-4.877l-1.511-1.512a2.024 2.024 0 0 1-2.747-2.746L13.335.894a1.017 1.017 0 0 0-1.432 0L.893 11.904a1.017 1.017 0 0 0 0 1.432l1.512 1.51a2.024 2.024 0 0 1 2.747 2.748l1.512 1.51a1.015 1.015 0 0 0 1.432 0L19.104 8.096a1.015 1.015 0 0 0 0-1.432zM8.457 16.719l-5.176-5.178L11.423 3.4l5.176 5.176-8.142 8.143z"></path></g></svg>
                                <p>Tickets</p>
                            </div>
                            <div className="piece__bottom">
                                <p>Adults from £18, Members and under-16s free.</p>
                            </div>
                        </div>
                        <div className="exBody__col4__button">
                            <Link>
                                <span>Book tickets</span>
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExBody