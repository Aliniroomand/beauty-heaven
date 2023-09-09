import React from 'react';
import { Link } from 'react-router-dom';
//styles
import styles from './ChooseGenderOrLogin.module.css'

//Images 
import manGender from '../assets/men first page logo.png'
import womanGender from '../assets/women first page logo.png'
import Login from './Login';

const ChooseGenderOrLogin = () => {
    return (           
        <div className={styles.container}>
            <div className={styles.chooseGender}>
                <h1>If you didn't come here yet ,<br></br> choose your gender :</h1>
                    <div className={styles.imageContainer}>
                        <Link 
                            to="/menservices">
                            <img src={manGender} alt='men-services-logo' />
                        </Link>
                        <Link 
                            to='/womenservices'>
                            <img src={womanGender}  alt='women-services-logo'/>
                        </Link> 
                    </div>                   
                <div className={styles.line}></div>
            </div>
            <div className={styles.login}>
                <h2>Or if you have account , Login:</h2>
                <Login/>
            </div>
            
        </div>    
        );
};

export default ChooseGenderOrLogin;