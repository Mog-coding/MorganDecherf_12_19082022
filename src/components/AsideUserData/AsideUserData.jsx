import './AsideUserData.css'
import caloriesIcon from '../../assets/icons/userData/calories-icon.svg';
import carbsIcon from '../../assets/icons/userData/carbs-icon.svg';
import fatIcon from '../../assets/icons/userData/fat-icon.svg';
import proteinIcon from '../../assets/icons/userData/protein-icon.svg';

const AsideUserData = () => {
    return (
        <section className='SectionAsideUserData'>
            <div className="empBloc">
            </div>
            <div className="userDataCardsCont">
                <div className='userDataCards'>
                    <img src={caloriesIcon} alt="" />
                    <div>
                        <p>10</p>
                        <p>Calories</p>
                    </div>
                </div>
                <div className='userDataCards'>
                    <img src={carbsIcon} alt="" />
                    <div>
                        <p>10</p>
                        <p>Proteines</p>
                    </div>
                </div>
                <div className='userDataCards'>
                    <img src={fatIcon} alt="" />
                    <div>
                        <p>10</p>
                        <p>Glucides</p>
                    </div>
                </div>
                <div className='userDataCards'>
                    <img src={proteinIcon} alt="" />
                    <div>
                        <p>10</p>
                        <p>Lipides</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AsideUserData;