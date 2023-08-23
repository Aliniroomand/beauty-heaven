import React, { useState } from 'react';
import styles from '../styles/MenServices.module.css';

const MenServices = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    })) 
    console.log(checkedItems);;
  };

  return (
    <div className={styles.container}>
      <form className={styles.imageContainer}>
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
            <button type='submit'> search for barbers</button>
        </ul>

      </form>
    </div>
  );
};

export default MenServices;