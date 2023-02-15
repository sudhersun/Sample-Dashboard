import React from 'react';
import './SearchBar_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faCartShopping} from '@fortawesome/free-solid-svg-icons'


const SearchBar = () => {
    return (
        <div className='searchBar-main-container'>
            <div className="searchBar-container">
                <div className="input-icon">
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass}/>
                    <input className='input-field' type="text" placeholder='         Search for products'  />
                    <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
