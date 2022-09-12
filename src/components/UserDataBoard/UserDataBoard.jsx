import './UserDataBoard.css';
import caloriesIcon from '../../assets/icons/userData/calories-icon.svg';
import carbsIcon from '../../assets/icons/userData/carbs-icon.svg';
import fatIcon from '../../assets/icons/userData/fat-icon.svg';
import proteinIcon from '../../assets/icons/userData/protein-icon.svg';

const UserDataBoard = ({ dataUser }) => {
    console.log('dataUser', dataUser.keyData);

    return (
        <section className="SectionAsideUserData">
            <div className="userDataCards">
                <img src={caloriesIcon} alt="" />
                <div className="userDataCardsTextCont">
                    <p className="userDataCardsText">{`${
                        dataUser.keyData.calorieCount / 1000
                    }kcal`}</p>
                    <p className="userDataCardsLegend">Calories</p>
                </div>
            </div>
            <div className="userDataCards">
                <img src={proteinIcon} alt="" />
                <div className="userDataCardsTextCont">
                    <p className="userDataCardsText">{`${dataUser.keyData.proteinCount}g`}</p>
                    <p className="userDataCardsLegend">Proteines</p>
                </div>
            </div>
            <div className="userDataCards">
                <img src={carbsIcon} alt="" />
                <div className="userDataCardsTextCont">
                    <p className="userDataCardsText">{`${dataUser.keyData.carbohydrateCount}g`}</p>
                    <p className="userDataCardsLegend">Glucides</p>
                </div>
            </div>
            <div className="userDataCards">
                <img src={fatIcon} alt="" />
                <div className="userDataCardsTextCont">
                    <p className="userDataCardsText">{`${dataUser.keyData.lipidCount}g`}</p>
                    <p className="userDataCardsLegend">Lipides</p>
                </div>
            </div>
        </section>
    )
};

export default UserDataBoard;
