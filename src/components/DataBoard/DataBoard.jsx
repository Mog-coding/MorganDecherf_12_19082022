import './DataBoard.css';
// import caloriesIcon from '../../assets/icons/userData/calories-icon.svg';
// import carbsIcon from '../../assets/icons/userData/carbs-icon.svg';
// import fatIcon from '../../assets/icons/userData/fat-icon.svg';
// import proteinIcon from '../../assets/icons/userData/protein-icon.svg';

const DataBoard = ({dataUser}) => {

    return (
        <div className="userDataCards">
            <img src={`${dataUser.icon}`} alt="" />
            <div className="userDataCardsTextCont">
                <p className="userDataCardsText">{`${dataUser.nb}${dataUser.unit}`}</p>
                <p className="userDataCardsLegend">{dataUser.name}</p>
            </div>
        </div>
    )
};

export default DataBoard;
