import './SideMenu.css';
import fitnessIcon1 from '../../assets/icons/fitness1.svg';
import bikeIcon2 from '../../assets/icons/bike2.svg';
import swimIcon3 from '../../assets/icons/swim3.svg';
import yogaIcon4 from '../../assets/icons/yoga4.svg';

const SideMenu = () => {
    return (
        <aside className="sideMenu-aside">
            <nav className="sideMenu-nav">
                <img src={yogaIcon4} alt="" />
                <img src={swimIcon3} alt="" />
                <img src={bikeIcon2} alt="" />
                <img src={fitnessIcon1} alt="" />
            </nav>
            <div className="sideMenu-copyright">Copyright SportSee 2020</div>
        </aside>
    )
};

export default SideMenu;
