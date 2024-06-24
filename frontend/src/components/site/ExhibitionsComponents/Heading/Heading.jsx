import React from 'react'
import './Heading.css'

const Heading = () => {
  return (
    <div className="ex__heading">
        <div className="custom-container ex__heading__cont">
            <div className="row ex__heading__row">
                <div className="col-12 ex__heading__col">
                    <h1>Exhibitions and events</h1>
                    <div className="search">
                    <input type="text" placeholder='What are you looking for?'/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Heading