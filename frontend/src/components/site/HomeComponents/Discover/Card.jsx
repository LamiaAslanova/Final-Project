import React from 'react'
// import Image from '../../../../assets/images/Photo1.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>
            <div className="col-6 single__card__col">
                <Link className="card single__card" to='details'>
                    <div className="card-body card__left">
                        <div className="card__left__top">
                            <p>A British Museum Touring Exhibition</p>
                            <h3>{}</h3>
                        </div>
                        <div className="card__left__bottom">
                            <p>{}</p>
                            <div>On UK tour</div>
                        </div>
                    </div>
                    <div className="card__right">
                        <img alt="" />
                    </div>
                </Link>
            </div>
            {/* <div className="col-6 special__button__col">
                <Link className='see__ex__button'>
                    <span>See all exhibitions and events</span>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </Link>
            </div> */}
        </>
    )
}

export default Card