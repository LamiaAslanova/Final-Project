import React, { useContext } from 'react'
import './ShopCartLink.css'
import { Link } from 'react-router-dom'
import MainContext from '../../../../context/context'

const ShopCart = () => {

    const { shopCartItems } = useContext(MainContext)

    return (
        <Link to='/shop-cart' className="shopCart">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Cart ({shopCartItems.length})</p>
        </Link>
    )
}

export default ShopCart