
import './Dashboard_style.css';
import RightBar from './Right-Side-Bar/RightBar';
import SideBar from './Side-bar/SideBar'
import CenterContent from './Center-Content/CenterContent';

const Dashboard = () => {
    
    return (
        <div className='main-container'>
            <div className="side-bar">
                <SideBar />
            </div>
            <div className="search-bar">
                <CenterContent />
            </div>
            <div className="right-bar">
                <RightBar />
            </div>
        </div>
    );
}

export default Dashboard;
