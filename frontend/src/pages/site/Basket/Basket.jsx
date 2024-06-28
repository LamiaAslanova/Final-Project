import React, { useContext } from 'react'
import './Basket.css'
import Table from '../../../components/site/BasketComponents/Table'
import MainContext from '../../../context/context'

const Basket = () => {

    const { cartItems } = useContext(MainContext)

    return (
        <div className="basket">
            <div className="custom-container basket__title__cont">
                <div className="row basket__title__row">
                    <div className="col-12 basket__title__col">
                        <h2>Shopping basket</h2>
                    </div>
                </div>
            </div>
            <Table cartItems={cartItems} />
        </div>
    )
}

export default Basket