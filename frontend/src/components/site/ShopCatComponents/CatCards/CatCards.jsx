import React from 'react'
import './CatCards.css'
import photo from '../../../../assets/images/shopitem.jpg'
import { Link } from 'react-router-dom'
import Delivery from '../../ShopComponents/DeliveryInfo/Delivery'

const CatCards = () => {
  return (
    <div className="catCards">
      <div className="custom-container catCards__mini__cont">
        <div className="row catCards__mini__row">
          <div className="col-8 catCards__mini__col">
            <Delivery/>
          </div>
        </div>
      </div>
      <div className="custom-container catCards__cont">
        <div className="row catCards__row">
          <div className="col-8">
            <div className="row">
              <div className="col-12 catCards__col12">
                <p>Sort By</p>
                <select name="sort" id="sort">
                  <option value="default">Default</option>
                  <option value="a-z">Name: A-Z</option>
                  <option value="z-a">Name: Z-A</option>
                  <option value="low-to-high">Price: low to high</option>
                  <option value="high-to-low">Price: high to low</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-4 catCards__col4">
                <div className="card single__card">
                  <Link to='/shop-details' className="card__top">
                    <img src={photo} alt="" />
                  </Link>
                  <div className="card-body card__bottom">
                    <Link to='/shop-details'>Escape of Odysseus Vase</Link>
                    <p>$199.00</p>
                  </div>
                </div>
              </div>
              <div className="col-4 catCards__col4">
                <div className="card single__card">
                  <div className="card__top">
                    <img src={photo} alt="" />
                  </div>
                  <div className="card-body card__bottom">
                    <h4>Escape of Odysseus Vase</h4>
                    <p>$199.00</p>
                  </div>
                </div>
              </div>
              <div className="col-4 catCards__col4">
                <div className="card single__card">
                  <div className="card__top">
                    <img src={photo} alt="" />
                  </div>
                  <div className="card-body card__bottom">
                    <h4>Escape of Odysseus Vase</h4>
                    <p>$199.00</p>
                  </div>
                </div>
              </div>
              <div className="col-4 catCards__col4">
                <div className="card single__card">
                  <div className="card__top">
                    <img src={photo} alt="" />
                  </div>
                  <div className="card-body card__bottom">
                    <h4>Escape of Odysseus Vase</h4>
                    <p>$199.00</p>
                  </div>
                </div>
              </div>
              <div className="col-4 catCards__col4">
                <div className="card single__card">
                  <div className="card__top">
                    <img src={photo} alt="" />
                  </div>
                  <div className="card-body card__bottom">
                    <h4>Escape of Odysseus Vase</h4>
                    <p>$199.00</p>
                  </div>
                </div>
              </div>
              <div className="col-4 catCards__col4">
                <div className="card single__card">
                  <div className="card__top">
                    <img src={photo} alt="" />
                  </div>
                  <div className="card-body card__bottom">
                    <h4>Escape of Odysseus Vaseenkfjnewkj</h4>
                    <p>$199.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatCards