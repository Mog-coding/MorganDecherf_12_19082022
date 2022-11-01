import './Header.css';
import sportSeeIcon from '../../assets/icons/sportSeeIcon.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="headerHeader">
            <Link to="/">
                <img src={sportSeeIcon} alt="" className="sportSeeIcon" />
            </Link>
            <nav className="headerNav">
                <p className="accueil">Accueil</p>
                <p className="profil">Profil</p>
                <p>Réglage</p>
                <p>Communauté</p>
            </nav>
        </header>
    )
};

export default Header;
