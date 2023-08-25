import React,{useContext} from 'react';

//Context
import {BarbersContext} from '../../context/BarbersContextProvider';
//Components
import Barber from '../men/Barber';
//LOading 
import menLoading from '../../assets/loading/men-loading.gif'

const BarbersList = () => {
const Barbers=useContext(BarbersContext);
console.log(Barbers.length);
    return (
        <div>
        {
            Barbers.length === 100? 
                Barbers.map(barber=> <Barber 
                    key={barber.id}
                    barberData={barber}
                    />)
            :<div>
                <img src={menLoading} style={{width:"200px",position:"fixed",zIndex:"1"}}/>
                <figcaption style={{color:"red",fontSize:"2rem",position:"fixed",zIndex:"10",a:"center"}}>loading</figcaption>
            </div>        
        }
        </div>
    );
};

export default BarbersList;