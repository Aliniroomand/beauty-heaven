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
    },[])
    return (
        <BarbersContext.Provider value={data}>
            {props.children}
        </BarbersContext.Provider>
        
        );
    };
    
export default BarbersContextProvider;