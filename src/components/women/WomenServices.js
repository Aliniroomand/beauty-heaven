import React, { useState } from 'react';
//styles
import styles from './WomenServices.module.css';

//components
import BeauticianList from './BeauticianList';

//images
import BG from '../../assets/women-services/mainBG.png'
//transition
import PagesTransition from '../../helper/PagesTransition'

const WomenServices = () => {
  // choose search method
  const [searchMethod, setSearchMethod] = useState('');

// part for based on sevices
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if(name.includes("Bride_Services") ){
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
    <div>
      <form  >
        <ul className={styles.listContainer}>
            <h3>choose what<br/> service or services<br/> do you need</h3>
          <li>
            <label htmlFor="HairCare">
              HairCare
            </label>
              <input
                className={styles.input}
                type="checkbox"
                id="HairCare"
                name="HairCare"
                checked={checkedItems.HairCare || false}
                onChange={handleCheckboxChange}
                disabled={checkedItems.Bride_Services}
              />
          </li>
          <li>
            <label htmlFor="Manicures_Pedicures">
              Manicures And Pedicures
            </label>
              <input
                className={styles.input}
                type="checkbox"
                id="Manicures_Pedicures"
                name="Manicures_Pedicures"
                checked={checkedItems.Manicures_Pedicures|| false}
                onChange={handleCheckboxChange}
                disabled={checkedItems.Bride_Services}

              />
          </li>
          <li>
            <label htmlFor="Facial_Treatments">
              Facial Treatments
            </label>
              <input
                className={styles.input}
                type="checkbox"
                id="Facial_Treatments"
                name="Facial_Treatments"
                checked={checkedItems.Facial_Treatments || false}
                onChange={handleCheckboxChange}
                disabled={checkedItems.Bride_Services}

              />
          </li>
          <li>
            <label htmlFor="Waxing">
              Hair Coloring
            </label>
              <input
                className={styles.input}
                type="checkbox"
                id="Waxing"
                name="Waxing"
                checked={checkedItems.Waxing || false}
                onChange={handleCheckboxChange}
                disabled={checkedItems.Bride_Services}

              />
          </li>
          <li>
            <label htmlFor="Body_Massage">
              Body Massage
            </label>
              <input
                className={styles.input}
                type="checkbox"
                id="Body_Massage"
                name="Body_Massage"
                checked={checkedItems.Body_Massage || false}
                onChange={handleCheckboxChange}
                disabled={checkedItems.Bride_Services}

                />
          </li>
          <li>
            <label htmlFor="Bride_Services">
              Bride Services
            </label>
              <input
                className={styles.input}
                type="checkbox"
                id="Bride_Services"
                name="Bride_Services"
                checked={checkedItems.Bride_Services || false}
                onChange={handleCheckboxChange}
                />
            {checkedItems.Bride_Services?<p className={styles.noteOfGroomService}>!!when you choose Bride Services it includes all of services!!</p>:null}
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
      <input placeholder='Enter name or Location (Loacation includes country,city,street,...)' type='text' onChange={search_by_Location}/>
    </div>
    // ____________

}
        <div className={styles.barbersList}>
        {<BeauticianList
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

export default WomenServices;