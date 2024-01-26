import React ,{ useState , useEffect ,createContext }from 'react';


//API
import {barbersInformations} from '../services/Api'


export const BeauticianContext= createContext();

const BeauticianContextProvider = (props) => {
    const [data,setData]=useState([]);
    useEffect ( ()=>{
        const fetchInfo= async ()=>{
            setData(await barbersInformations()) 
        }
        fetchInfo();
    },[]);

    const newData = data.map(item => {
        let services = ['HairCare'];
        let VIP = false;
        let address=`${item.country} ${item.state} ${item.city} ${item.street}`;
        let name=`${item.first_name} ${item.last_name}`
        //The purpose of this number modulo operation is solely to simulate the provided services,
        // and it does not serve any practical purpose when using the actual and original API.
          if (item.id % 2 === 0 ) {
            services.push('Manicures_Pedicures','Facial_Treatments');
          }
          if (item.id % 3 === 0) {
            services.push('Manicures_Pedicures','Facial_Treatments','Waxing');
          }
          if (item.id % 4 === 0) {
            services.push('Manicures_Pedicures','Facial_Treatments','Waxing','Body_Massage',"Bride_Services");
          }
          if (item.id <= 5 || item.id % 4 === 0){
            VIP=true
          }

        
        return { ...item, services , VIP , address ,name };
      });
    return (
        <BeauticianContext.Provider value={newData}>
            {props.children}
        </BeauticianContext.Provider>
        
        );
    };
    
export default BeauticianContextProvider;