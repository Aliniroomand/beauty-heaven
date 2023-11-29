import React, { useContext } from 'react';

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

let filtered=[];
if(services.length < 1 ){
filtered=Barbers
}else{
filtered =Barbers.filter(barber => barber.services.sort().toString().includes( services.sort().toString()))

}

  return (
    <div className={styles.container}>
      <h2>
        {`List of Barbers:`}<br />
        {`total: ${filtered.length} persons`}
      </h2>
      <div className={styles.containerOfList}>
{

      filtered.length ? (
    filtered.map(barber => (
      <Barber key={barber.id} barberData={barber} />
    ))
  ) : services.length > 0 ? (
    <h1 className={styles.nothingFound}>Nothing Found ...</h1>
  ) : (
    <div className={styles.loadingPart}>
      <img src={menLoading} alt="loading" />
      <figcaption>LOADING</figcaption>
    </div>
  )
}
      </div>
    </div>
  );
};

export default BarbersList;