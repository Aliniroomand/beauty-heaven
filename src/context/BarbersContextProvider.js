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
        let services = 'haircut';
        //The purpose of this number modulo operation is solely to simulate the provided services,
        // and it does not serve any practical purpose when using the actual and original API.
          if (item.id % 2 === 0) {
            services += ',beard_service';
          }
          if (item.id % 3 === 0) {
            services += ',scalp_treatments';
          }
          if (item.id % 6 === 0) {
            services += ',hair_coloring';
          }
          if (item.id % 10 === 0) {
            services += ',groom_services';
          }
        
        return { ...item, services };
      });

    return (
        <BarbersContext.Provider value={newData}>
            {props.children}
        </BarbersContext.Provider>
        
        );
    };
    
export default BarbersContextProvider;