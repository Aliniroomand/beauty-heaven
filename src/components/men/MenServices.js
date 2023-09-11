import React, { useState } from 'react';
import styles from './MenServices.module.css';

//components
import BarbersList from './BarbersList';

const MenServices = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((event) => ({
      ...event,
      [name]: checked,
    }));
    
  };
  
  //for showing what services are choosen
  const choosedServices = Object.keys(checkedItems).filter((key) => checkedItems[key] === true);
  
  
//this part is for changing image_______
let classForBackground = styles.imageContainer;

if(choosedServices.join("").includes("groom_services")) { 
classForBackground = styles.groom_services }
else{
classForBackground=styles.imageContainer
}

  
//____________________

  
  return (
    <>
    <div className={styles.container}>
      <div className={classForBackground}>

      </div>
      <div>
      <form  >
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
                disabled={checkedItems.groom_services}
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
                disabled={checkedItems.groom_services}

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
                disabled={checkedItems.groom_services}

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
                disabled={checkedItems.groom_services}

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
                {checkedItems.groom_services?<p className={styles.noteOfGroomService}>!!when you choose Groom services <br></br>it includes all of services!!</p>:null}
          </li>
        </ul>

      </form>
      </div>
        <div className={styles.barbersList}>
        {<BarbersList
          services={choosedServices}
         />}
      </div>
    </div>
      </>
  );
};

export default MenServices;