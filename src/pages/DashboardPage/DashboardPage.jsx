import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserDatas, getUserActivity, getUserSessions, getUserPerformance } from '../../service/apiService.js';

import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import AsideUserData from '../../components/AsideUserData/AsideUserData';
import { UserModel, ActivityModel } from '../../models/userModel.js';
import './DashboardPage.css';

const DashboardPage = () => {
    const { id } = useParams();
    const [userDatas, setUserDatas] = useState([]);
    // const [userDatas, setUserDatas] = useState(new UserModel());
    const [userActivity, setUserActivity] = useState([]);
    const [userSessions, setUserSessions] = useState([]);
    const [userPerformance, setUserPerformance] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getUserFullData() {
            const dataUser = await getUserDatas(id)
            setUserDatas(dataUser)
            const dataActivity = await getUserActivity(id)
            setUserActivity(dataActivity)
            const dataSessions = await getUserSessions(id)
            setUserSessions(dataSessions)
            const dataPerformance = await getUserPerformance(id)
            setUserPerformance(dataPerformance)
            setIsLoading(false)
        }
        getUserFullData()
    }, [id]);

    return (
        <>
            {console.log('comp render')}
            {!isLoading ? (
                <>
                    {console.log("loading ok", isLoading, userActivity.sessions)}
                    <Header />
                    <div className="dash-global-cont">
                        <SideMenu />
                        <div className="dash-middle-cont">
                            <main className="dash-main">
                                <h1>
                                    Bonjour <span>{userDatas.userInfos.firstName}</span>
                                </h1>
                                <p>
                                    Félicitation ! Vous avez explosé vos objectifs
                                    hier 👏
                                </p>
                            </main>
                            <section>
                                <ActivityChart dataActivity={userActivity.sessions} />
                            </section>
                            <section className="chart3">
                                3 chart
                            </section>
                        </div>
                        <AsideUserData />
                    </div>





                    {/* <div className="sup">
                        <div className="chart-title">Activité quotidienne</div>
                        <div><ActivityChart dataActivity={userActivity.sessions} /></div>
                    </div> */}

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
