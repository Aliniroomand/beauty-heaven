import React,{useContext} from 'react';

//Context
import {BarbersContext} from '../context/BarbersContextProvider';
//Components
import Barber from './Barber';

const BarbersList = () => {
const Barbers=useContext(BarbersContext);

    return (
        <div>
        {
            Barbers.map(barber=> <Barber 
                key={barber.id}
                barberData={barber}
                />)
        }
        </div>
    );
};

export default BarbersList;