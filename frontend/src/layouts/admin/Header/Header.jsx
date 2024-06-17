import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <div class="page-wrapper toggled">
      <Link id="show-sidebar" class="btn btn-sm btn-dark">
        <i class="fas fa-bars"></i>
      </Link>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <div class="sidebar-brand">
            <Link><img width="150px" src="https://www.britishmuseum.org/themes/custom/numiko/dist/img/british-museum-logo.svg" alt="" /></Link>
          </div>
          <div class="sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search..." />
                <div class="input-group-text">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>E-commerce</span>
              </li>
              <li class="sidebar-dropdown">
                <Link to='exhibitions-infos'>
                  <i class="fa-regular fa-calendar"></i>
                  <span>Exhibitions</span>
                </Link>
              </li>
              <li class="sidebar-dropdown">
                <Link>
                  <i class="fa-solid fa-calendar"></i>
                  <span>Events</span>
                </Link>
              </li>
              <li class="sidebar-dropdown">
                <Link>
                  <i class="fa-solid fa-palette"></i>
                  <span>Collection</span>
                </Link>
              </li>
              <li class="sidebar-dropdown">
                <Link>
                  <i class="fa fa-shopping-cart"></i>
                  <span>Shop</span>
                </Link>
              </li>
              <li class="header-menu">
                <span>Add</span>
              </li>
              <li class="sidebar-dropdown">
                <Link to='add-exhibition'>
                  <i class="fa-regular fa-calendar"></i>
                  <span>Add to exhibitions</span>
                </Link>
              </li>
              <li class="sidebar-dropdown">
                <Link to='add-event'>
                  <i class="fa-solid fa-calendar"></i>
                  <span>Add to events</span>
                </Link>
              </li>
              <li class="sidebar-dropdown">
                <Link to='add-collection'>
                  <i class="fa-solid fa-palette"></i>
                  <span>Add to collection</span>
                </Link>
              </li>
              <li class="sidebar-dropdown">
                <Link to='add-shop'>
                  <i class="fa fa-shopping-cart"></i>
                  <span>Add to shop</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header