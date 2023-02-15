// import React from 'react';
import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router';
import './SideBar_style.css';
import brandlogo from '../Images/brand_dji_icon_157979.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan,faCamera,faRobot, faCompass, faHeadset, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    // declare a state and variable
    const [logout, setLogout] = useState(false);
    const navigator  = useNavigate();
    const username = localStorage.getItem('username');
    // useEffect. if the localStorage don't have the 'auth' the page will redirect the page to login page
    useEffect(() => {
        if(!localStorage.getItem('auth')){
            navigator('/login');
        }
        // eslint-disable-next-line
    },[logout])
    // handleClick. when click the logout button this function is call and remove the 'auth' and redirect to the login page
    const handleClick = () => {
        localStorage.removeItem('auth');
        setLogout(true)
    }
    return (
        <div className='sideBar-container'>
            <div className="sideBar-heading">
                <img src={brandlogo} alt='brand-logo' />
            </div>
            <div className="sideBar_menu">
                <ul className='sideBar_list' style={{listStyle: 'none'}}>
                    <li className="sideBar_item">
                        <FontAwesomeIcon icon={faFan} size='xl' className='icon' id='active' />  <a href="/" id='drone' className="sideBar_link">Drone</a>
                    </li>
                    <li className="sideBar_item">
                        <FontAwesomeIcon icon={faCamera} size='xl' className='icon' /> <a href="/" className="sideBar_link">Camera</a>
                    </li>
                    <li className="sideBar_item">
                       <FontAwesomeIcon icon={faRobot} size='xl' className='icon' /> <a href="/" className="sideBar_link">History</a> 
                    </li>
                    <li className="sideBar_item">
                        <FontAwesomeIcon icon={faCompass} size='xl' className='icon' /><a href="/" className="sideBar_link">Explore</a>
                    </li>
                    <li className="sideBar_item">
                        <FontAwesomeIcon icon={faHeadset} size='xl' className='icon' /><a href="/" className="sideBar_link">Support</a>
                    </li>
                    <li className="sideBar_item">
                        <FontAwesomeIcon icon={faGear} size='xl' className='icon' /><a href="/" className="sideBar_link">Settings</a>
                    </li>
                </ul>
                <p><button onClick={handleClick} className='logout_btn'>{username} <FontAwesomeIcon icon={faRightFromBracket} size='xl' className='logout_icon' /></button></p>
            </div>
        </div>
    );
}

export default SideBar;
