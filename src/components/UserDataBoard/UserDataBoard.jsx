import './UserDataBoard.css';
import caloriesIcon from '../../assets/icons/userData/calories-icon.svg';
import carbsIcon from '../../assets/icons/userData/carbs-icon.svg';
import fatIcon from '../../assets/icons/userData/fat-icon.svg';
import proteinIcon from '../../assets/icons/userData/protein-icon.svg';

import DataBoard from '../DataBoard/DataBoard';

const doto = [
    {
        name: 'calories',
        unit: 'kCal',
        icon: caloriesIcon
    },
    {
        name: 'proteines',
        unit: 'g',
        icon: carbsIcon
    },
    {
        name: 'glucides',
        unit: 'g',
        icon: fatIcon
    },
    {
        name: 'lipides',
        unit: 'g',
        icon: proteinIcon
    }
]

const UserDataBoard = ({ dataUser }) => {

    return (
        <section className="SectionAsideUserData">
            {doto.map((el, index) => {
                return (
                    <DataBoard
                        dataUser={dataUser.calories} 
                        boardIcon={el.icon}
                        boardUnit={el.unit}
                        boardName={el.name}
                        key={`${el.name}-${index}`}
                        />
                )
            })}
        </section>
    )
};

export default UserDataBoard;
