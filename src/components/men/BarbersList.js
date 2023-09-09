import React,{useContext} from 'react';

//Context
import {BarbersContext} from '../../context/BarbersContextProvider';
//Components
import Barber from '../men/Barber';
//LOading 
import menLoading from '../../assets/loading/men-loading.gif'
// styles
import styles from './BarberList.module.css'

const BarbersList = () => {
const Barbers=useContext(BarbersContext);
    return (
        <div className={styles.container}>
          <h2 style={{color:"rgb(250, 100, 0)",fontSize:"1.2rem"}}>{`List of Barbers:` }<br></br>
          {`total:${Barbers.length} persons`}</h2>

        {
            Barbers.length === 100? 
                Barbers.map(barber=> 
                <Barber 
                    key={barber.id}
                    barberData={barber}
                    />)
            :<div className={styles.loadingPart}>
                <img src={menLoading}  alt ="loading"style={{}}/>
                <figcaption>LOADING</figcaption>
            </div>        
        }
        </div>
    );
};

export default BarbersList;