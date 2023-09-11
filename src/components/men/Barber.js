import React, { useState } from 'react';

//styles
import styles from './Barber.module.css'


const Barber = ({barberData}) => {

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={barberData.profile_picture} alt='profile'/>
            </div>
            <div className={styles.textContainer}>
                <h3>name :<span> {barberData.first_name} {barberData.last_name}</span></h3>
                <h3>gender : <span>{barberData.gender}</span></h3>
                <h3>address : <span>{barberData.city},{barberData.street}</span></h3>
                
            </div>
            
        </div>
        );
    };

export default Barber;