import { Link } from 'react-router-dom';

import './HomePage.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="dash-global-cont">
                <SideMenu />
                <nav className="homePageNav">
                    <Link to="/mock">Donnée mock</Link>
                    <Link to="/12">User 12</Link>
                    <Link to="/18">User 18</Link>
                </nav>
            </div>
        </>
    )
};

export default HomePage;
