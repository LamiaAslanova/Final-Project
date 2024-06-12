import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="custom-container">
                    <div className="header">
                        <div className="header__left">
                            <Link>
                                <img src="https://www.britishmuseum.org/themes/custom/numiko/dist/img/british-museum-logo.svg" alt="" />
                            </Link>
                        </div>
                        <div className="header__right">
                            <div className="header__right__top">
                                <ul>
                                    <li>
                                        <Link>
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            <p>Shop</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                            <p>Search</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='rightmost'>
                                            <p>
                                                Donate
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="header__right__bottom">
                                <nav>
                                    <ul>
                                        <li><Link>Visit</Link></li>
                                        <li><Link>Exhibitions and events</Link></li>
                                        <li><Link>Collection</Link></li>
                                        <li><Link>Learn</Link></li>
                                        <li><Link>Membership</Link></li>
                                        <li><Link className='rightmost'>Support us</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i class="fa-solid fa-bars"></i>Menu</button>
                            <div className="header__right__offcanvas">
                                <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        ...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header