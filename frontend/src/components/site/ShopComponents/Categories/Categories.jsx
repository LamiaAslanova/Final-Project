import React, { Children } from 'react'
import './Categories.css'
import replicas from "../../../../assets/images/replicas.jpg"
import jewellery from "../../../../assets/images/jewellery.jpg"
import books from "../../../../assets/images/books.jpg"
import fashion from "../../../../assets/images/fashion.jpg"
import homeware from "../../../../assets/images/homeware.jpg"
import children from "../../../../assets/images/children.jpg"
import lewis from "../../../../assets/images/lewis.jpg"
import rosetta from "../../../../assets/images/rosetta.jpg"
import hokusai from "../../../../assets/images/hokusai.jpg"
import games from "../../../../assets/images/games.jpg"
import cats from "../../../../assets/images/cats.jpg"
import peter from "../../../../assets/images/peter.jpg"
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="categories">
            <div className="custom-container categories__cont">
                <div className="row categories__row">
                    <div className="col-10">
                        <div className="row">
                            <div className="col-4 category__col">
                                <Link to='shop-category' className='category'>
                                    <img src={replicas} alt="" />
                                    <div className="category__caption">
                                        <h3>Replicas</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={jewellery} alt="" />
                                    <div className="category__caption">
                                        <h3>Jewellery</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={books} alt="" />
                                    <div className="category__caption">
                                        <h3>Books</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={fashion} alt="" />
                                    <div className="category__caption">
                                        <h3>Fashion</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={homeware} alt="" />
                                    <div className="category__caption">
                                        <h3>Homeware</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={children} alt="" />
                                    <div className="category__caption">
                                        <h3>Children</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={lewis} alt="" />
                                    <div className="category__caption">
                                        <h3>Lewis Chessman</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={rosetta} alt="" />
                                    <div className="category__caption">
                                        <h3>Rosetta</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={hokusai} alt="" />
                                    <div className="category__caption">
                                        <h3>Hokusai</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={games} alt="" />
                                    <div className="category__caption">
                                        <h3>Games</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={cats} alt="" />
                                    <div className="category__caption">
                                        <h3>Cats</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 category__col">
                                <Link className='category'>
                                    <img src={peter} alt="" />
                                    <div className="category__caption">
                                        <h3>Peter Rabbit</h3>
                                        <span>Shop now <i className='fa fa-long-arrow-right'></i></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories