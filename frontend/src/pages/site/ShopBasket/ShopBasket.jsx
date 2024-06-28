import React, { useContext } from 'react'
import './ShopBasket.css'
import Table from '../../../components/site/ShopBasketComponents/Table'
import MainContext from '../../../context/context'

const ShopBasket = () => {

  const { shopCartItems, setShopCartItems } = useContext(MainContext)

  return (
    <div className="shopBasket">
      <div className="custom-container shopBasket__title__cont">
        <div className="row shopBasket__title__row">
          <div className="col-10 shopBasket__title__col">
            <h2>Shopping basket</h2>
          </div>
        </div>
      </div>
      <Table shopCartItems={shopCartItems}/>
    </div>
  )
}

export default ShopBasket