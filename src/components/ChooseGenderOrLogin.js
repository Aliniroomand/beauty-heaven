import React from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from '../styles/ChooseGenderOrLogin.module.css'

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
                            to='/menServices'>
                            <img src={manGender} />
                        </Link>
                        <Link 
                            to='/womenServices'>
                            <img src={womanGender} />
                        </Link> 
                    </div>                   
                <div className={styles.line}></div>
            </div>
            <div className={styles.login}>
                <h1>Or if you have account , Login:</h1>
                <Login/>
            </div>
        </div>    
        );
};

export default ChooseGenderOrLogin;