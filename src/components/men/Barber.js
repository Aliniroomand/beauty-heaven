import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from './Barber.module.css'


const Barber = ({barberData}) => {
    const [clicked,setClicked]=useState(false)


    return (
      <>
        <div id={barberData.id}  className={styles.container}>
            <div id={barberData.id}className={styles.imageContainer}>
                <img id={barberData.id} src={barberData.profile_picture} alt='profile'/>
            </div>
            <div id={barberData.id}className={styles.textContainer}>
                <span className={styles.VIP}>
                {barberData.VIP&& <h3 >VIP</h3>}
                </span>
                <h3 id={barberData.id} >name :<span id={barberData.id}> {barberData.first_name} {barberData.last_name}</span></h3>
                <h3 id={barberData.id} >gender : <span id={barberData.id}>{barberData.gender}</span></h3>
                <h3 id={barberData.id} >city : <span id={barberData.id}>{barberData.city}</span></h3>
                
            </div>
            
        </div>
        </>
        );
    };

export default Barber;