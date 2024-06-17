import React from 'react'
import Image from '../../../../assets/images/Photo1.jpg'

const Card = () => {
  return (
    <>
            <div className="col-6 single__card__col">
                <div className="card single__card">
                    <div className="card-body card__left">
                        <div className="card__left__top">
                            <p>A British Museum Touring Exhibition</p>
                            <h3><span>Drawing attention</span><br /> emerging artists</h3>
                        </div>
                        <div className="card__left__bottom">
                            <p>27 October 2023 - 24 August 2024</p>
                            <div>On UK tour</div>
                        </div>
                    </div>
                    <div className="card__right">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-6 single__card__col">
                <div className="card single__card">
                    <div className="card-body card__left">
                        <div className="card__left__top">
                            <p>A British Museum Touring Exhibition</p>
                            <h3><span>Drawing attention</span><br /> emerging artists in dialogue</h3>
                        </div>
                        <div className="card__left__bottom">
                            <p>27 October 2023 - 24 August 2024</p>
                            <div>On UK tour</div>
                        </div>
                    </div>
                    <div className="card__right">
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