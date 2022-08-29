import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserDatas, getUserActivity, getUserSessions, getUserPerformance  } from '../../service/apiService.js';

import './DashboardPage.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';

const DashboardPage = () => {
    const { id } = useParams();
    const [userDatas, setUserDatas] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userSessions, setUserSessions] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);

    let userId;
    if (id) {
        if (id.match(/^12$|^18$/)) userId = id }

    useEffect(() => {
        console.log('useEffect');
        getUserDatas(userId).then((data) => setUserDatas(data));
        getUserActivity(userId).then((data) => setUserActivity(data));
        getUserSessions(userId).then((data) => setUserSessions(data));
        getUserPerformance(userId).then((data) => setUserPerformance(data));
    }, [userId]);

    return (
        <>
            {console.log('comp render', userDatas)}
            {userDatas ? (
                <>
                    <Header />
                    <div className="dash-cont">
                        <SideMenu />
                        <main className="dash-main">
                            <h1>
                                Bonjour <span>Thomas</span>
                            </h1>
                            <p>
                                Félicitation ! Vous avez explosé vos objectifs
                                hier 👏
                            </p>
                            <div>para: {userId}</div>
                            <div>{`Nom: ${userDatas.userInfos.firstName}, score: ${userDatas.todayScore}`}</div>
                        </main>
                        <div></div>
                    </div>
                </>
            ) : (
                <>
                    <div>wait</div>
                </>
            )}
        </>
    );
};

export default DashboardPage;
