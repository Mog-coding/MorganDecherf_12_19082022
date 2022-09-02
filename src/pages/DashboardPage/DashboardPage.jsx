import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserDatas, getUserActivity, getUserSessions, getUserPerformance } from '../../service/apiService.js';

import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
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
        async function getUserFullData(){
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
                    {console.log("loading ok",isLoading, userDatas)}
                    <Header />
                    <div className="dash-cont">
                        <SideMenu />
                        <main className="dash-main">
                            <h1>
                                Bonjour <span>{""}</span>
                            </h1>
                            <p>
                                Félicitation ! Vous avez explosé vos objectifs
                                hier 👏
                            </p>
                            <div>para: {id}</div>
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
