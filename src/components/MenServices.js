import React, { useState } from 'react';
import styles from '../styles/MenServices.module.css';


const MenServices = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((event) => ({
      ...event,
      [name]: checked,
    }
    ) )
  };
  
  const searchForBarberHandler = (event)=>{
    event.preventDefault();
    const choosenServices = Object.keys(checkedItems).filter(((key) => checkedItems[key] === true))
    return choosenServices;
  }
  
  //for showing what services are choosen
const choosedServices = Object.keys(checkedItems).filter((key) => checkedItems[key] === true);
let classForBackground = styles.imageContainer;

if(!choosedServices.join("")){
  classForBackground = styles.imageContainer
}
if(choosedServices.join("") === "haircut" ){
  classForBackground = styles.hairImage;
}
if(choosedServices.join("") === "beard_service" ){
  classForBackground = styles.beard_service;
}  
if(choosedServices.join("") === "scalp_treatments" ){
  classForBackground = styles.scalp_treatments;
}
if(choosedServices.join("") === "hair_coloring" ){
  classForBackground = styles.hair_coloring;
}
if(choosedServices.join("") === "haircutbeard_service" ||choosedServices.join("") === "beard_servicehaircut" ){
  classForBackground = styles.haircutbeard_service;
}
if(choosedServices.join("") === "haircutscalp_treatments" || choosedServices.join("") === "scalp_treatmentshaircut" ){
  classForBackground = styles.haircutscalp_treatments;
}
if(choosedServices.join("") === "haircuthair_coloring" || choosedServices.join("") === "hair_coloringhaircut" ){
  classForBackground = styles.haircuthair_coloring;
}
if(choosedServices.join("") === "beard_servicescalp_treatments" || choosedServices.join("") === "scalp_treatmentsbeard_service" ){
  classForBackground = styles.beard_servicescalp_treatments;
}
if(choosedServices.join("") === "beard_servicehair_coloring" || choosedServices.join("") === "hair_coloringbeard_service" ){
  classForBackground = styles.beard_servicehair_coloring;
}
if(choosedServices.join("") === "hair_coloringscalp_treatments" || choosedServices.join("") === "scalp_treatmentshair_coloring" ){
  classForBackground = styles.hair_coloringscalp_treatments;
}
if(choosedServices.join("").includes("haircut") &&
    choosedServices.join("").includes("beard_service")  &&
    choosedServices.join("").includes("scalp_treatments")
    )
    {classForBackground = styles.haircutbeard_servicescalp_treatments;
}

if(choosedServices.join("").includes("groom_services")){
  classForBackground = styles.groom_services;
}


//____________________

  //for changing man's face based on choosen services
  
console.log(choosedServices.join(""));
  return (
    <div className={styles.container}>
      <form className={classForBackground} >
        <ul className={styles.listContainer}>
            <h3>choose what do you need</h3>
          <li>
            <label htmlFor="haircut">
              <input
                type="checkbox"
                id="haircut"
                name="haircut"
                checked={checkedItems.haircut || false}
                onChange={handleCheckboxChange}
              />
              Haircut
            </label>
          </li>
          <li>
            <label htmlFor="beard_service">
              <input
                type="checkbox"
                id="beard_service"
                name="beard_service"
                checked={checkedItems.beard_service || false}
                onChange={handleCheckboxChange}
              />
              Beard trim OR<br></br> shave OR<br></br> facial hair styling
            </label>
          </li>
          <li>
            <label htmlFor="scalp_treatments">
              <input
                type="checkbox"
                id="scalp_treatments"
                name="scalp_treatments"
                checked={checkedItems.scalp_treatments || false}
                onChange={handleCheckboxChange}
              />
              Scalp Treatments
            </label>
          </li>
          <li>
            <label htmlFor="hair_coloring">
              <input
                type="checkbox"
                id="hair_coloring"
                name="hair_coloring"
                checked={checkedItems.hair_coloring || false}
                onChange={handleCheckboxChange}
              />
              Hair Coloring
            </label>
          </li>
          <li>
            <label htmlFor="groom_services">
              <input
                type="checkbox"
                id="groom_services"
                name="groom_services"
                checked={checkedItems.groom_services || false}
                onChange={handleCheckboxChange}
              />
              Groom Services
            </label>
          </li>
            <button type='submit' onClick={searchForBarberHandler} className={styles.searchButton}> search for barbers</button>
        </ul>

      </form>
    </div>
  );
};

export default MenServices;