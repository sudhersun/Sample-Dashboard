import React from 'react';
import Ads from './Ads/Ads';
import Cards from './Product-Cards/Cards';
import SearchBar from './Search-bar/SearchBar';
import './CenterContent.css';

const CenterContent = () => {
    return (
        <div className='center-container'>
            <div className="search-component-container">
                <SearchBar />
            </div>
            <div className="ads-component-container">
                <Ads />
            </div>
            <div className="cars-component-container">
                <Cards />
            </div>
        </div>
    );
}

export default CenterContent;
