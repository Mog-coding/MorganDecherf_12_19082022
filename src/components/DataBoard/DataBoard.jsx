import './DataBoard.css';

const DataBoard = ({dataUser, boardIcon, boardUnit, boardName}) => {

    return (
        <div className="userDataCards">
            <img src={boardIcon} alt="" />
            <div className="userDataCardsTextCont">
                <p className="userDataCardsText">{`${dataUser}${boardUnit}`}</p>
                <p className="userDataCardsLegend">{boardName}</p>
            </div>
        </div>
    )
};

export default DataBoard;
