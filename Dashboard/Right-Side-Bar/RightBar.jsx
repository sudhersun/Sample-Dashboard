import React from 'react';
import './RightBar_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose, faPlus} from '@fortawesome/free-solid-svg-icons';
import RightImg from '../Drone-Images/img-1.jpg'

const RightBar = () => {
    return (
        <div className='right-main-container'>
            <div className="rightBar-container">
                <div className="header-1">
                    <FontAwesomeIcon className='close-icon' icon={faClose}/>
                    <h4>DJI Phantom 4Pro</h4>
                </div>
                <div className="rightBar-image">
                    <div className="img-slider">
                        <img src={RightImg} alt="imge" />
                    </div>
                    <div className="dot-container">
                        <p className='dot' id='active'></p>
                        <p className='dot'></p>
                        <p className='dot'></p>
                        <p className='dot'></p>
                        <p className='dot'></p>
                    </div>
                </div>
                
                <div className="version-list">
                    <p className='version'>version</p>
                    <div className="list-1">
                        <input type='radio' value='rc with screen' name='version' id='screen'></input><label for='screen'>RC with screen (5.5",1080p,1000cd/m2)</label> 
                    </div>
                    <div className="list-1">
                        <input type='radio' value='rc with screen' name='version' id='standard'></input><label for='standard'>Standard RC</label> 
                    </div>
                </div>
                <div className="accessory">
                    <p className="acc-head">Dont't Miss Top Accessories</p>
                    <div className="acc-list">
                        <input type='radio' value='sd' name='access' id='sd'></input>
                        <label for='sd'>SanDisk Extreme MicroSD 128gb</label>
                        <p className='price'>USD $30</p> 
                        <div className="acc-detail">
                            <p className='detail'>Detail</p>
                            <FontAwesomeIcon icon={faPlus} className='detail-icon' />
                        </div>
                    </div>
                    <div className="acc-list">
                        <input type='radio' value='battary' name='access' id='battary'></input>
                        <label for='battary'>Phantom 4 Battary Changing Hub</label>
                        <p className='price'>USD $130</p> 
                        <div className="acc-detail">
                            <p className='detail'>Detail</p>
                            <FontAwesomeIcon icon={faPlus} className='detail-icon' />
                        </div>
                    </div>
                </div>
                <div className="price-details">
                    <div className="amount-detail">
                        <p className='amount'>USD $1,599 </p>
                        <small>or as low as $145/mo.</small>
                    </div>
                    <button className='shop'>Shop Now</button>
                </div>
            </div>
        </div>
    );
}

export default RightBar;
