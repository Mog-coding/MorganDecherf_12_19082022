import { createPath, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserDatas, getUserActivity, getUserSessions, getUserPerformance } from '../../service/apiService.js';

import './DashboardPage.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import { UserModel } from '../../models/userModel.js';

const DashboardPage = () => {
    const { id } = useParams();
    const [userDatas, setUserDatas] = useState(new UserModel());
    const [userActivity, setUserActivity] = useState(null);
    const [userSessions, setUserSessions] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);
    const [isLoading, setIsLoading] = useState(true);




    useEffect(() => {
        console.log('useEffect');
        Promise.all([
            getUserDatas(id),
            getUserActivity(id),
            getUserSessions(id),
            getUserPerformance(id)
        ])
        .then((values) => { 
            console.log(values);
            setUserDatas(values[0]);
            setUserActivity(values[1]);
            setUserSessions(values[2]);
            setUserPerformance(values[3]);
            setIsLoading(false)
        })
    }, [id]);

    return (
        <>
            {console.log('comp render', userDatas)}
            {isLoading ? (
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
                            <div>para: {""}</div>
                            {/* <div>{`Nom: ${userDatas.userInfos.firstName}, score: ${userDatas.todayScore}`}</div> */}
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
