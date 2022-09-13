import './UserDataBoard.css';
import DataBoard from '../DataBoard/DataBoard';

const UserDataBoard = ( {dataUser} ) => {

    return (
        <section className="SectionAsideUserData">
            <DataBoard dataUser={dataUser.calories} />
            <DataBoard dataUser={dataUser.glucides} />
            <DataBoard dataUser={dataUser.lipides} />
            <DataBoard dataUser={dataUser.proteines} />
         </section>
    )
};

export default UserDataBoard;
