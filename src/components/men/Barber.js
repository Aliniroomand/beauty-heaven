import React, { useState } from 'react';

//styles
import styles from './Barber.module.css'


const Barber = ({barberData}) => {
    let barberServices={...barberData,services:'haircut'}
    //The purpose of this number modulo operation is solely to simulate the provided services,
    // and it does not serve any practical purpose when using the actual and original API.
    if (barberData.id % 2 === 0) {
        barberServices = { ...barberData, services: 'haircut,beard_service' };}
    if (barberData.id % 3 === 0) {
          barberServices = { ...barberData, services: 'haircut,beard_service, scalp_treatments' };
        }
    if (barberData.id % 6 === 0 ) {
        barberServices = { ...barberData, services: 'haircut,beard_service, scalp_treatments,hair_coloring' };
        }
    if (barberData.id % 10 === 0) {
        barberServices = { ...barberData, services: 'haircut,beard_service, scalp_treatments,hair_coloring,groom_services' };
      }
    

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