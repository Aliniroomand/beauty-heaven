import React, { useContext, useEffect, useState } from 'react';

// Context
import { BarbersContext } from '../../context/BarbersContextProvider';
// Components
import Barber from '../men/Barber';
// Loading
import menLoading from '../../assets/loading/men-loading.gif';
// Styles
import styles from './BarberList.module.css';

const BarbersList = ({ services }) => {
  const Barbers = useContext(BarbersContext);
  const [filteredBarbers, setFilteredBarbers] = useState([]);
console.log(Barbers.filter(barber=>barber.services.toString().includes(services.toString())));
// console.log(services.toString());
// console.log(Barbers.map(barber=>barber.services));
// console.log(Barbers[0].services.toString()===services.toString());
// useEffect(()=>{
//     setFilteredBarbers(filteredBarbers=Barbers)
// },[services])
  return (
    <div className={styles.container}>
      <h2 style={{ color: "rgb(250, 100, 0)", fontSize: "1.2rem" }}>
        {`List of Barbers:`}<br />
        {`total: ${filteredBarbers.length} persons`}
      </h2>

      <div>
        {(filteredBarbers.length) ?
          filteredBarbers.map(barber =>
            <Barber
              key={barber.id}
              barberData={barber}
            />)
          :
          <div className={styles.loadingPart}>
            <img src={menLoading} alt="loading" style={{}} />
            <figcaption>LOADING</figcaption>
          </div>
        }
      </div>
    </div>
  );
};

export default BarbersList;