import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

//styles
import styles from"./BarberINF.module.css"


const BarberINF = () => {
    const {id}=useParams()
    const [informations,setInformations]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData= async()=> {
            setIsLoading(true)
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/users/${id}`);
            setInformations(response.data.user);
            setIsLoading(false);
        }
        fetchData();
    }, []);
    const {state,country,city,street,email,first_name,last_name,gender,profile_picture}=informations;
    return (
        <>
            {!isLoading ?
                <div className={styles.container}>
                    <div >
                        <img src={profile_picture} alt='profile_picture'/>
                    </div>
                    <div className={styles.textContainer}>
                        <p><span>name : </span> {first_name} {last_name} </p>
                        <p><span>Gender : </span> {gender}</p>
                        <p><span>Email : </span> {email}</p>
                        <p><span>Address : </span> {country} , {state} ,{city} ,{street}</p>
                    <Link to={"/menservices"}><button>back</button></Link>
                    <Link><button>reserve Time</button></Link>
                    </div>
                </div>:
            <div className={styles.loadingPart}>
            <h1>LOADING</h1>
          </div>
          }







        </>
    );
};

export default BarberINF;
