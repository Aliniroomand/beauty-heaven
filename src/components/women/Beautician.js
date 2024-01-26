import React from 'react';
import { Link } from 'react-router-dom';

//styles
// import styles from './Barber.module.css'


const Beautician = ({beauticianData}) => {

    return (
      <>
        <Link to={`/menservices/${beauticianData.id}`} className={styles.container}>
            <div id={beauticianData.id}className={styles.imageContainer}>
                <img src={beauticianData.profile_picture} alt='profile'/>
            </div>
            <div  className={styles.textContainer}>
                <span className={styles.VIP}>
                {beauticianData.VIP&& <h3 >VIP</h3>}
                </span>
                <h3 >name :<span id={beauticianData.id}> {beauticianData.first_name} {beauticianData.last_name}</span></h3>
                <h3 >gender : <span id={beauticianData.id}>{beauticianData.gender}</span></h3>
                <h3 >city : <span id={beauticianData.id}>{beauticianData.city}</span></h3>
            </div>
        </Link>
        </>
        );
    };

export default Beautician;