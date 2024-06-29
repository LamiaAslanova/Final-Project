import React, { useContext, useEffect, useRef, useState } from 'react'
import './Heading.css'
import MainContext from '../../../../context/context'
import { Link } from 'react-router-dom'

const Heading = () => {

  const [dropdownHeight, setDropdownHeight] = useState(0)
  const { searchQuery, handleSearchChange, filteredItems, dropdownVisible } = useContext(MainContext)
  const searchContainerRef = useRef(null)

  useEffect(() => {
    if (dropdownVisible) {
      const dropdown = document.querySelector('.search-dropdown')
      if (dropdown) {
        setDropdownHeight(dropdown.offsetHeight)
      }
    } else {
      setDropdownHeight(0)
    }
  }, [dropdownVisible, filteredItems])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        handleSearchChange({ target: { value: '' } })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleSearchChange])

  const detailPathSearch = (category, id) => {
    return category === 'Special' ? `/exhibition-details/${id}` : (category === 'Free' ? `/free-exhibition-details/${id}` : `/event-details/${id}`)
  }

  const clearSearch = () => {
    handleSearchChange({ target: { value: '' } });
  }

  return (
    <div className="ex__heading">
      <div className="custom-container ex__heading__cont">
        <div className="row ex__heading__row" style={{ marginBottom: `${dropdownHeight}px` }}>
          <div className="col-12 ex__heading__col">
            <h1>Exhibitions and events</h1>
            <div className="search" ref={searchContainerRef}>
              <input type="text" placeholder='What are you looking for?' value={searchQuery} onChange={handleSearchChange} />
              <i id='search' class="fa-solid fa-magnifying-glass"></i>
              {searchQuery && (
                <button onClick={clearSearch} className="clear__search"><i class="fa-solid fa-xmark"></i></button>
              )}
              {dropdownVisible && (
                <div className="search-dropdown">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => {
                      return (
                        <Link to={detailPathSearch(item.category, item._id)} key={index} className="search-dropdown-item">
                          <div className="search-dropdown-item__title">
                            <p>{item.title}</p>
                          </div>
                          <div className="search-dropdown-item__image">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="search-dropdown-item__icon">
                            <i id='go-to' class="fa-solid fa-circle-chevron-right"></i>
                          </div>
                        </Link>
                      )
                    })
                  ) : (
                    <div className="nothing">No results found</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading