import './DataBoard.css';
import PropTypes from 'prop-types';

const DataBoard = ({ dataUser, boardIcon, boardUnit, boardName }) => {
    return (
        <div className="userDataCards">
            <img src={boardIcon} alt="" />
            <div className="userDataCardsTextCont">
                <p className="userDataCardsText">{`${dataUser}${boardUnit}`}</p>
                <p className="userDataCardsLegend">{boardName}</p>
            </div>
        </div>
    );
};

DataBoard.propTypes = {
    dataUser: PropTypes.number,
    boardIcon: PropTypes.string,
    boardUnit: PropTypes.string,
    boardName: PropTypes.string,
};

export default DataBoard;
