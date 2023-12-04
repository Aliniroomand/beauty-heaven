import React from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from './Barber.module.css'


const Barber = ({barberData}) => {

    return (
      <>
        <Link to={`/menservices/${barberData.id}`} className={styles.container}>
            <div id={barberData.id}className={styles.imageContainer}>
                <img src={barberData.profile_picture} alt='profile'/>
            </div>
            <div  className={styles.textContainer}>
                <span className={styles.VIP}>
                {barberData.VIP&& <h3 >VIP</h3>}
                </span>
                <h3 >name :<span id={barberData.id}> {barberData.first_name} {barberData.last_name}</span></h3>
                <h3 >gender : <span id={barberData.id}>{barberData.gender}</span></h3>
                <h3 >city : <span id={barberData.id}>{barberData.city}</span></h3>
            </div>
        </Link>
        </>
        );
    };

export default Barber;