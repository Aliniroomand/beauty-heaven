import React ,{ useState , useEffect ,createContext }from 'react';


//API
import {barbersInformations} from '../services/Api'


export const BarbersContext= createContext();

const BarbersContextProvider = (props) => {
    const [data,setData]=useState([]);
    useEffect ( ()=>{
        const fetchInfo= async ()=>{
            setData(await barbersInformations()) 
        }
        fetchInfo();
    },[]);

    const newData = data.map(item => {
        let services = ['haircut'];
        let VIP = false;
        let address=`${item.country} ${item.state} ${item.city} ${item.street}`;
        let name=`${item.first_name} ${item.last_name}`
        //The purpose of this number modulo operation is solely to simulate the provided services,
        // and it does not serve any practical purpose when using the actual and original API.
          if (item.id % 2 === 0 ) {
            services.push('beard_service','scalp_treatments');
          }
          if (item.id % 3 === 0) {
            services.push('beard_service','scalp_treatments','hair_coloring');
          }
          if (item.id % 4 === 0) {
            services.push('beard_service','scalp_treatments','hair_coloring','groom_services');
          }
          if (item.id <= 3){
            VIP=true
          }

        
        return { ...item, services , VIP , address ,name };
      });
    return (
        <BarbersContext.Provider value={newData}>
            {props.children}
        </BarbersContext.Provider>
        
        );
    };
    
export default BarbersContextProvider;