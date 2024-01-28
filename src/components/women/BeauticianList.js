import React, { useContext } from 'react';

// Context
import { BeauticianContext } from '../../context/BeauticianContextProvider';
// Components
import Beautician from './Beautician';
// Loading
import  womenLoading from '../../assets/loading animated/women-loading.gif';
// Styles
import styles from './BeauticianList.module.css';

const BeauticianList = ({ services ,searchByLocation , searchMethod}) => {
  const beautician = useContext(BeauticianContext);
console.log(beautician);
  let filtered=[];

if( searchMethod==="services"){
  if(services.length < 1 ){
    filtered=beautician
  }else{
    filtered =beautician.filter(beautician => beautician.services.sort().toString().includes( services.sort().toString()))
  }
}

if (searchMethod === "location"){
  if(searchByLocation.split("").length < 1){
    filtered=beautician;
  } else{
    filtered =beautician.filter(beautician=>beautician.address.trim().toLowerCase().includes(searchByLocation.toLowerCase().trim())
                              || beautician.name.trim().toLowerCase().includes(searchByLocation.toLowerCase().trim()))
}
}
  return (
    <div className={styles.container}>
      <h2>
        {`List of Beautician:`}<br />
        {`total: ${filtered.length} persons`}
      </h2>
      <div className={styles.containerOfList}>
{

      filtered.length ? 
    (
      filtered.map(beautician => (
        <Beautician key={beautician.id} beauticianData={beautician} />
      ))
    )
   : 
    services.length > 0 ? 
      (
    <h1 className={styles.nothingFound}>Nothing Found ...</h1>
      ) 
      : 
        (searchMethod !== "location" && searchMethod !== "services" )?
          <h1 className={styles.selectMethodError}>Please select a method</h1>
      : ((searchMethod === "location" || searchMethod === "services") && services.length > 0 ) ?
      <h1 className={styles.nothingFound}>Nothing Found ...</h1>
        :
  
      (
        <div className={styles.loadingPart}>
          <img src={womenLoading} alt="loading" />
          <figcaption>LOADING</figcaption>
        </div>
      )
}
      </div>
    </div>
  );
};

export default BeauticianList;