import React, { useState } from 'react';
//styles
import styles from './MenServices.module.css';

//components
import BarbersList from './BarbersList';

//images
import BG from '../../assets/Men-images-services/BarberDesk.png'
//transition
import PagesTransition from '../../helper/PagesTransition'

const MenServices = () => {
  // choose search method
  const [searchMethod, setSearchMethod] = useState('');

// part for based on sevices
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if(name === "groom_services" ){
      setCheckedItems(() => ({
        [name]: checked,
      }))
    }else{
    setCheckedItems((event) => ({
      ...event,
      [name]: checked,
    }));}
    
  };
  
    //for showing what services are choosen
  const choosedServices = Object.keys(checkedItems).filter((key) => checkedItems[key] === true);
  // _______________

//for search by LOC
const [searchLocation,setSearchLocation]=useState("");
const search_by_Location=(e)=>{
  setSearchLocation(e.target.value)
}
  
// ____________________
  return (
    <>
    <PagesTransition>
    <div className={styles.container}>
      <img className={styles.BG} src={BG} alt='BG'/>
{/* choose search method */}
      <div className={styles.selectMethod}>
      <h1>Choose search method</h1>
      <div className={styles.buttonContainer}>
        <button onClick={()=>setSearchMethod('location')}>Location Or Name</button>
        <button onClick={()=>setSearchMethod('services')}>Services</button>
      </div>
      </div>
{
  (searchMethod === 'services') ?
  <>
  {/* search by services  */}
    <div className={styles.servicesContainer}>
      <form  >
        <ul className={styles.listContainer}>
            <h3>choose what<br/> service or services<br/> do you need</h3>
          <li>
            <label htmlFor="haircut">
              Haircut
            </label>
              <input
              className={styles.input}
                type="checkbox"
                id="haircut"
                name="haircut"
                checked={checkedItems.haircut || false}
                onChange={handleCheckboxChange}
                disabled={checkedItems.groom_services}
              />
          </li>
          <li>
            <label htmlFor="beard_service">
              Beard services
            </label>
              <input
              className={styles.input}
                type="checkbox"
                id="beard_service"
                name="beard_service"
                checked={checkedItems.beard_service || false}
                onChange={handleCheckboxChange}
                disabled={checkedItems.groom_services}

              />
          </li>
          <li>
            <label htmlFor="scalp_treatments">
              Scalp Treatments
            </label>
              <input
              className={styles.input}
                type="checkbox"
                id="scalp_treatments"
                name="scalp_treatments"
                checked={checkedItems.scalp_treatments || false}
                onChange={handleCheckboxChange}
                disabled={checkedItems.groom_services}

              />
          </li>
          <li>
            <label htmlFor="hair_coloring">
              Hair Coloring
            </label>
              <input
              className={styles.input}
                type="checkbox"
                id="hair_coloring"
                name="hair_coloring"
                checked={checkedItems.hair_coloring || false}
                onChange={handleCheckboxChange}
                disabled={checkedItems.groom_services}

              />
          </li>
          <li>
            <label htmlFor="groom_services">
              Groom Services
            </label>
              <input
              className={styles.input}
                type="checkbox"
                id="groom_services"
                name="groom_services"
                checked={checkedItems.groom_services || false}
                onChange={handleCheckboxChange}
                />
                {checkedItems.groom_services?<p className={styles.noteOfGroomService}>!!when you choose Groom services it includes all of services!!</p>:null}
          </li>
        </ul>

      </form>
    </div>
    {/* // ____________ */}
  </>
: (searchMethod === "location") &&
// {/* search by location */}
    <div className={styles.searchByLocation}>
      <h2>Enter Name <br/>Or <br/> Location to find ...</h2>
      <input placeholder='Loacation includes country,city,street,...' type='text' onChange={search_by_Location}/>
    </div>
    // ____________

}
        <div className={styles.barbersList}>
        {<BarbersList
          services={choosedServices}
          searchByLocation={searchLocation}
          searchMethod={searchMethod}
         />}
      </div>
    </div>
    </PagesTransition>
      </>

  );
};

export default MenServices;