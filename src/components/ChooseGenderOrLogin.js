import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './ChooseGenderOrLogin.module.css'

//Images 
import manGender from '../assets/men first page logo.png'
import website from '../assets/website.png'
import womanGender from '../assets/women first page logo.png'
import adminPanel from '../assets/adminPanel.png'
import BG from '../assets/BG2.jpg'
// import Login from './Login';

import signArrow from "../assets/signs57.png"

// components
import FloatedImages from '../helper/FloatedImages'
const ChooseGenderOrLogin = () => {
    return (           
        <div className={styles.container}>
            <img className={styles.BG} src={BG} alt='BG' />
            <FloatedImages/>
            <img className={styles.signArrow} src={signArrow} alt='signArrow' />
            <div className={styles.chooseGender}>
                <h1>Where do you want to go ?! </h1>
                    <div className={styles.imageContainer}>
                        <Link className={styles.men}
                            to="/menservices">
                                <h3>Men services</h3>
                            <img src={manGender} alt='men-services-logo' />
                        </Link>
                        <Link className={styles.women}
                            to='/womenservices'>
                                <h3>Women Services</h3>
                            <img src={womanGender}  alt='women-services-logo'/>
                        </Link> 
                    </div>                   
            </div>
                <div >
                    <Link className={styles.login}> 
                        <img src={adminPanel} alt='adminPanel'/>
                        <h3>
                            User Panel
                        </h3>
                    </Link>
                </div>
                <div >
                    <Link className={styles.website}> 
                        <img src={website} alt='website'/>
                        <h3>
                            Website
                        </h3>
                    </Link>
                </div>
            {/* <div className={styles.login}>
                <h2>Or if you have account , Login:</h2>
                <Login/>
            </div> */}
            
        </div>    
        );
};

export default ChooseGenderOrLogin;