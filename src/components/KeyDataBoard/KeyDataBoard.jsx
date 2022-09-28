import './KeyDataBoard.css';
import caloriesIcon from '../../assets/icons/userData/calories-icon.svg';
import carbsIcon from '../../assets/icons/userData/carbs-icon.svg';
import fatIcon from '../../assets/icons/userData/fat-icon.svg';
import proteinIcon from '../../assets/icons/userData/protein-icon.svg';

import KeyData from '../KeyData/KeyData';
import PropTypes from 'prop-types';

/**
 * @description contains all datas of KeyData's component except keyData value 
 * @type {{name: string, unit: string, icon: string}} 
 */
const dataKey = [
    {
        name: 'calories',
        unit: 'cal',
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

/**
 * @description Component that imbricate severals keyData component's to form a keyData board
 */
const KeyDataBoard = ({ dataUser }) => {

    return (
        <section className="SectionAsideKeyData">
            {dataKey.map((el, index) => {

                const arrDataUser = Object.entries(dataUser);

                return (
                    <KeyData
                        keyDataQuantity={arrDataUser[index][1]}
                        keyDataIcon={el.icon}
                        keyDataUnit={el.unit}
                        keyDataName={el.name}
                        key={`${el.name}-${index}`}
                    />
                )
            })}
        </section>
    )
};

KeyDataBoard.propTypes = {
     dataUser: PropTypes.object.isRequired
};

export default KeyDataBoard;