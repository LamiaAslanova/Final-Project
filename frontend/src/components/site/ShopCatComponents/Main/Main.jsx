import React from 'react'
import './Main.css'
import photo from '../../../../assets/images/shopitem.jpg'

const Main = () => {
  return (
    <div className="main">
      <div className="custom-container main__cont">
        <div className="row main__row">
          <div className="col-8">
            <div className="row">
              <div className="col-12 main__col12">
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
              <div className="col-4 main__col4">
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
              <div className="col-4 main__col4">
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
              <div className="col-4 main__col4">
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
              <div className="col-4 main__col4">
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
              <div className="col-4 main__col4">
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
              <div className="col-4 main__col4">
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

export default Main