import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    getUserDatas,
    getUserActivity,
    getUserSessions,
    getUserPerformance,
} from '../../service/apiService.js';

import './DashboardPage.css';
import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import UserDataBoard from '../../components/UserDataBoard/UserDataBoard';
import ovalblack from '../../assets/icons/ovalblack.svg';
import ovalred from '../../assets/icons/ovalred.svg';
import TodayScoreChart from '../../components/TodayScoreChart/TodayScoreChart';
import AverageSessionsChart from '../../components/AverageSessionsChart/AverageSessionsChart';
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart';
import { Loader } from '../../service/Loader/Loader';

const DashboardPage = () => {
    const { id } = useParams();
    const [userDatas, setUserDatas] = useState([]);
    const [userActivity, setUserActivity] = useState([]);
    const [userSessions, setUserSessions] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getUserFullData() {
            const dataUser = await getUserDatas(id);
            setUserDatas(dataUser);
            const dataActivity = await getUserActivity(id);
            setUserActivity(dataActivity);
            const dataSessions = await getUserSessions(id);
            setUserSessions(dataSessions);
            const dataPerformance = await getUserPerformance(id);
            setUserPerformance(dataPerformance);
            setIsLoading(false);
        }
        getUserFullData();
    }, [id]);

    return (
        <>
            {console.log('comp render')}
            {!isLoading ? (
                <>
                    <Header />
                    <div className="dash-global-cont">
                        <SideMenu />
                        <div className="dash-main-cont">
                            <main className="dash-main">
                                <h1>
                                    Bonjour{' '}
                                    <span>{userDatas.userInfos.firstName}</span>
                                </h1>
                                <p>
                                    Félicitation ! Vous avez explosé vos
                                    objectifs hier 👏
                                </p>
                            </main>
                            <div className="chartsBoardCont">
                                <section className="sectionCharts">
                                    <div className="chartActivity">
                                        <div className="chartActivityTitle">
                                            Activité quotidienne
                                            <div>
                                                <span className="chartActivityTitleBlack">
                                                    <img
                                                        src={ovalblack}
                                                        alt=""
                                                    />
                                                    Poids (kg)
                                                </span>
                                                <span className="chartActivityTitleRed">
                                                    <img src={ovalred} alt="" />
                                                    Calories brûlées (kcal)
                                                </span>
                                            </div>
                                        </div>
                                        <ActivityChart dataActivity={userActivity.sessions} />
                                    </div>
                                    <div className="chartCont">
                                        <div className="chartAverageSession">
                                            <p>Durée moyenne des sessions</p>
                                            <AverageSessionsChart dataSessions={userSessions.sessions} />
                                        </div>
                                        <div className="chartPerformance">
                                            <PerformanceChart dataPerformance={userPerformance} />
                                        </div>
                                        <div className="chartToday">
                                            <div className="chartTodayText">
                                                <p className="chartTodayTitle">
                                                    Score
                                                </p>
                                                <div className="chartTodayLegend">
                                                    <p className="chartTodayLegendScore">{
                                                    `${userDatas.todayScore * 100 }%`
                                                        }</p>
                                                    <p>de votre</p>
                                                    <p>objectif</p>
                                                </div>
                                            </div>
                                            <TodayScoreChart dataScore={userDatas.todayScore} />
                                        </div>
                                    </div>
                                </section>
                                <div className="userBoard">
                                    <UserDataBoard dataUser={userDatas.keyData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Header />
                    <div className="dash-global-cont">
                        <SideMenu />
                        <Loader />
                    </div>
                </>
            )}
        </>
    )
};

export default DashboardPage;
