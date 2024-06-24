import React from 'react'
import './Basket.css'

const Basket = () => {
    return (
        <div className="basket">
            <div className="custom-container basket__title__cont">
                <div className="row basket__title__row">
                    <div className="col-12 basket__title__col">
                        <h2>Shopping basket</h2>
                    </div>
                </div>
            </div>
            <div className="custom-container basket__cont">
                <div className="row basket__row">
                    <div className="col-12 basket__col">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="tableitem">
                                            <h3>Michelangelo
                                                the last decades</h3>
                                            <div className="tableitem__bottom">
                                                <img src="https://www.britishmuseum.org/sites/default/files/styles/16_9_media_huge/public/2021-08/lgbtq-tour-1920.jpg?h=f3e1135c&itok=sTZdWEio" alt="" />
                                                <div className="tableitem__bottom__right">
                                                    <p>5 july 2787</p>
                                                    <p>daily 10.00-20.00</p>
                                                    <div className="count__div">
                                                        <p>4 tickets</p>
                                                        <p>$20.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="quantity">
                                            <button><i class="fa-solid fa-caret-left"></i></button>
                                            <p>5</p>
                                            <button><i class="fa-solid fa-caret-right"></i></button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="totalprice">
                                            <p>$80.00</p>
                                            <button><i class="fa-solid fa-xmark"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="tableitem">
                                            <h3>Michelangelo
                                                the last decades</h3>
                                            <div className="tableitem__bottom">
                                                <img src="https://www.britishmuseum.org/sites/default/files/styles/16_9_media_huge/public/2021-08/lgbtq-tour-1920.jpg?h=f3e1135c&itok=sTZdWEio" alt="" />
                                                <div className="tableitem__bottom__right">
                                                    <p>5 july 2787</p>
                                                    <p>daily 10.00-20.00</p>
                                                    <div className="count__div">
                                                        <p>4 tickets</p>
                                                        <p>$20.00</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="quantity">
                                            <button><i class="fa-solid fa-caret-left"></i></button>
                                            <p>5</p>
                                            <button><i class="fa-solid fa-caret-right"></i></button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="totalprice">
                                            <p>$80.00</p>
                                            <button><i class="fa-solid fa-xmark"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="custom-container basket__total__cont">
                <div className="row basket__total__row">
                    <div className="col-12 basket__total__col">
                        <h3>Total</h3>
                        <p>$51.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket