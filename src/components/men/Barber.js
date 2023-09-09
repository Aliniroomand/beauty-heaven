import React, { useState } from 'react';

//styles
import styles from './Barber.module.css'


const Barber = ({barberData}) => {
    let barberServices={...barberData,services:'haircut'}
    if (barberData.id % 2 === 0) {
        barberServices = { ...barberData, services: 'haircut,beard_service' };
        if (barberData.id % 6 === 0) {
          barberServices = { ...barberData, services: 'haircut,beard_service, scalp_treatments' };
        }
      } else if (barberData.id % 6 === 0) {
        barberServices = { ...barberData, services: 'haircut,scalp_treatments' };
        if (barberData.id % 2 === 0) {
          barberServices = { ...barberData, services: 'haircut,beard_service, scalp_treatments' };
        }
      } else if (barberData.id % 10 === 0) {
        barberServices = { ...barberData, services: 'haircut,hair_coloring' };
      } else if (barberData.id % 4 === 0) {
        barberServices = { ...barberData, services: 'haircut,groom_services' };
      }
    

    // console.log(services.services)
    // console.log(barberData.id%5===0)
    // const service=barberData.city.split(" ")[0]==="West"
    // const [services,setServices]=useState([])
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={barberData.profile_picture} alt='profile'/>
            </div>
            <div className={styles.textContainer}>
                <h3>name :<span> {barberData.first_name} {barberData.last_name}</span></h3>
                <h3>gender : <span>{barberData.gender}</span></h3>
                <h3>address : <span>{barberData.city},{barberData.street}</span></h3>
                <p>services: {barberServices.services}</p>
                
            </div>
            
        </div>
        );
    };

export default Barber;