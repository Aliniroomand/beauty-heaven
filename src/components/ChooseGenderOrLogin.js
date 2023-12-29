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
        <section className={styles.links_container}>
                <div className={styles.main_title}>
                <h1>Where do you want to go ?! </h1>
                </div>
                <div className={styles.men_chooseGender}>
                        <Link className={styles.men}
                            to="/menservices">
                                <h3>Men services</h3>
                        </Link>
                            <img src={manGender} alt='men-services-logo' />
                </div>
                <div className={styles.women_chooseGender}>
                        <Link className={styles.women}
                            to='/womenservices'>
                                <h3>Women Services</h3>
                        </Link> 
                        <img src={womanGender}  alt='women-services-logo'/>
                </div>                   
                <div className={styles.login_container}>
                        <Link to='UserPanel' className={styles.login}> 
                            User Panel
                        </Link>
                        <img src={adminPanel} alt='adminPanel'/>
                </div>
                <div className={styles.website_container}>
                    <Link to='/website' className={styles.website}> 
                            Website
                    </Link>
                    <img src={website} alt='website'/>
                </div>
            </section>
            {/* <div className={styles.login}>
                <h2>Or if you have account , Login:</h2>
                <Login/>
            </div> */}
            
        </div>    
        
        );

};

export default ChooseGenderOrLogin;