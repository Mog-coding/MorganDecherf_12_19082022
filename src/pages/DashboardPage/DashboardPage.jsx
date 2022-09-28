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
import KeyDataBoard from '../../components/KeyDataBoard/KeyDataBoard';
import ovalblack from '../../assets/icons/ovalblack.svg';
import ovalred from '../../assets/icons/ovalred.svg';
import TodayScoreChart from '../../components/TodayScoreChart/TodayScoreChart';
import AverageSessionsChart from '../../components/AverageSessionsChart/AverageSessionsChart';
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart';
import { Loader } from '../../service/Loader/Loader';

/**
 * @description component page that shows four charts and keyDataBoard according user's datas
 */
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
            {!isLoading ? (
                <>
                    <Header />
                    <div className="dash-global-cont">
                        <SideMenu />
                        <main className="dash-main-cont">
                            <div className="dash-main">
                                <h1>
                                    Bonjour{' '}
                                    <span>{userDatas.userInfos.firstName}</span>
                                </h1>
                                <p>
                                    Félicitation ! Vous avez explosé vos
                                    objectifs hier 👏
                                </p>
                            </div>
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
                                                        `${userDatas.todayScore * 100}%`
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
                                    <KeyDataBoard dataUser={userDatas.keyData} />
                                </div>
                            </div>
                        </main>
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
