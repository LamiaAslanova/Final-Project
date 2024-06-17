import React from 'react'
import Image from '../../../../assets/images/Hockney.jpg'

const Card = () => {
    return (
        <>
            <div className="col-4 single__card__col">
                <div className="card single__card">
                    <div className="card-body card__top">
                        <div className="card__top__top">
                            <h3><span>Drawing attention</span><br /> emerging</h3>
                        </div>
                        <div className="card__top__bottom">
                            <div className="card__top__bottom__left">
                                <p>Exhibition</p>
                                <p>1 February - 23 June 2024</p>
                            </div>
                            <div className='card__top__bottom__right'>
                                <div>On UK tour</div>
                            </div>
                        </div>
                    </div>
                    <div className="card__bottom">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-4 single__card__col">
                <div className="card single__card">
                    <div className="card-body card__top">
                        <div className="card__top__top">
                            <p>A British Museum Touring Exhibition</p>
                            <h3><span>Drawing attention</span><br /> emerging artists in dialogue</h3>
                        </div>
                        <div className="card__top__bottom">
                            <div className="card__top__bottom__left">
                                <p>Exhibition</p>
                                <p>1 February - 23 June 2024</p>
                            </div>
                            <div className='card__top__bottom__right'>
                                <div>On UK tour</div>
                            </div>
                        </div>
                    </div>
                    <div className="card__bottom">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-4 single__card__col">
                <div className="card single__card">
                    <div className="card-body card__top">
                        <div className="card__top__top">
                            <p>A British Museum Touring Exhibition</p>
                            <h3><span>Drawing attention</span><br /> emerging artists in dialogue</h3>
                        </div>
                        <div className="card__top__bottom">
                            <div className="card__top__bottom__left">
                                <p>Exhibition</p>
                                <p>1 February - 23 June 2024</p>
                            </div>
                            <div className='card__top__bottom__right'>
                                <div>On UK tour</div>
                            </div>
                        </div>
                    </div>
                    <div className="card__bottom">
                        <img src={Image} alt="" />
                    </div>
                </div>
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