import { useState, useEffect } from 'react';

import { getUserData } from '../../service/getUserData.js';
import './DashboardPage.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';

const DashboardPage = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setUserData(getUserData());
    }, []);
    console.log('data state:', userData);

    return (
        <>
            <Header />
            <div className="dash-cont">
                <SideMenu />
                <main className="dash-main">
                    <h1>
                        Bonjour <span>Thomas</span>
                    </h1>
                    <p>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                    <div>data:{userData}</div>
                </main>
                <div></div>
            </div>
        </>
    )
};

export default DashboardPage;
