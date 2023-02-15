import React from 'react';
import './Ads_style.css';
import DronImg from '../Drone-Images/img-7.jfif';

const Ads = () => {
    return (
        <div className='ads-main-container'>
            <div className="text-container">
                <h2>PHANTOM 4PRO</h2>
                <h3>Visionary Intelligence</h3>
                <p>An update camera is equpped with a 1-inch 20 megapixels sensor capable of shooting 4k/60fps videos..</p> 
                <div className="text-btn">
                    <button className='btn-buy'>Buy Now</button>
                    <button className='btn-learn'>Learn More</button>
                </div>
            </div>
            <div className="img-container">
                <img src={DronImg} alt="dronimg" />
            </div>
        </div>
    );
}

export default Ads;
