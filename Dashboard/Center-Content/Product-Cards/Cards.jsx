import React from 'react';
import './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import Drone from '../Drone-Images/img-3.jpg';
import Drone2 from '../Drone-Images/img-4.jpg';
import Drone3 from '../Drone-Images/img-5.jpg';
import Drone4 from '../Drone-Images/img-6.jpg';

const Cards = () => {
    return (
        <div className='card-container'>
            <div className="card-header">
                <h3>Top products for you</h3>
                <a href="/Dashboard">See all</a>
            </div>
            <div className="card-list">
                <div className="card-1">
                    <img src={Drone} alt="card-dron-img" />
                    <div className="card-body">
                        <div className="card-body-header">
                            <h4>Mavic Air 2</h4>
                            <p>USD $1799</p>
                            <small>or as low as $799/mo.</small>
                        </div>
                        <div className="card-button">
                            <button><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
                <div className="card-2">
                    <img src={Drone2} alt="card-dron-img" />
                    <div className="card-body">
                        <div className="card-body-header">
                            <h4>Phantom 4</h4>
                            <p>USD $1099</p>
                            <small>or as low as $799/mo.</small>
                        </div>
                        <div className="card-button">
                            <button><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
                <div className="card-3">
                    <img src={Drone3} alt="card-dron-img" />
                    <div className="card-body">
                        <div className="card-body-header">
                            <h4>Mavic Air 2</h4>
                            <p>USD $1799</p>
                            <small>or as low as $799/mo.</small>
                        </div>
                        <div className="card-button">
                            <button><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
                <div className="card-4">
                    <img src={Drone4} alt="card-dron-img" />
                    <div className="card-body">
                        <div className="card-body-header">
                            <h4>DJI Mini SE</h4>
                            <p>USD $1299</p>
                            <small>or as low as $799/mo.</small>
                        </div>
                        <div className="card-button">
                            <button><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
