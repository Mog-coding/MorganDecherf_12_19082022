import './UserDataBoard.css';
import caloriesIcon from '../../assets/icons/userData/calories-icon.svg';
import carbsIcon from '../../assets/icons/userData/carbs-icon.svg';
import fatIcon from '../../assets/icons/userData/fat-icon.svg';
import proteinIcon from '../../assets/icons/userData/protein-icon.svg';

import DataBoard from '../DataBoard/DataBoard';
import PropTypes from 'prop-types';

const boardData = [
    {
        name: 'calories',
        unit: 'kCal',
        icon: caloriesIcon
    },
    {
        name: 'proteines',
        unit: 'g',
        icon: proteinIcon
    },
    {
        name: 'glucides',
        unit: 'g',
        icon: carbsIcon
    },
    {
        name: 'lipides',
        unit: 'g',
        icon: fatIcon
    }
]

const UserDataBoard = ({ dataUser }) => {

    return (
        <section className="SectionAsideUserData">
            {boardData.map((el, index) => {

                const arrDataUser = Object.entries(dataUser);

                return (
                    <DataBoard
                        dataUser={arrDataUser[index][1]}
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