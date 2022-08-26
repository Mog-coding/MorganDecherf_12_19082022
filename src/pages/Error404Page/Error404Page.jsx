import Header from '../../components/Header/Header';
import SideMenu from '../../components/SideMenu/SideMenu';
import './Error404Page.css'

const Error404Page = () => {
    return (
        <>
            <Header />
            <div className="dash-cont">
                <SideMenu />
                <p className="error404">Error 404</p>
            </div>
        </>
    )
};

export default Error404Page;
