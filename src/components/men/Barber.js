import React from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from './Barber.module.css'


const Barber = ({barberData}) => {
  
    return (
      <>
      <Link style={{textDecoration:"none"}} to={`/menservices/${barberData.id}`}>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={barberData.profile_picture} alt='profile'/>
            </div>
            <div className={styles.textContainer}>
                <h3>name :<span> {barberData.first_name} {barberData.last_name}</span></h3>
                <h3>gender : <span>{barberData.gender}</span></h3>
                <h3>city : <span>{barberData.city}</span></h3>
                
            </div>
            
        </div>
        </Link>
        </>
        );
    };

export default Barber;