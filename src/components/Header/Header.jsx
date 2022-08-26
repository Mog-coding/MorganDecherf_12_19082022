import './Header.css';

import sportSeeIcon from '../../assets/icons/sportSeeIcon.svg';

const Header = () => {
    return (
        <header className="headerHeader">
            <div>
                <img src={sportSeeIcon} alt="" className="sportSeeIcon" />
            </div>
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
