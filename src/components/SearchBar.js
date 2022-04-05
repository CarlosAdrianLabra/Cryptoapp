import React from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchBar({palabra}) {
  return (
    <div className="search-box">
        <input type='text' placeholder='Nombre de la moneda ...' onChange={palabra}></input>
        <div className='search-btn'>
            <i className='fas fa-search'><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
        </div>
    </div>
  )
}

export default SearchBar