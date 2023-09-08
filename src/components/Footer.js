import React from 'react';
//Logo
import Logo from "../assets/mainLogo.png"
import instagramLogo from "../assets/footer-socialMedia/instagram.svg"
import facebookLogo from "../assets/footer-socialMedia/facebook.svg"
import twitterLogo from "../assets/footer-socialMedia/twitter.svg"
import LinkedinLogo from "../assets/footer-socialMedia/Linkedin.svg"
//styles
import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={Logo}/>
            </div>
            <div className={styles.contactInformations}>
                <h1>contact Us:</h1>
                <h3>aliniroomand32@gmail.com</h3>
            </div>
            <div className={styles.socialMediaIcons}>
                <h1>follow Us:</h1>
                <img src={instagramLogo} />
                <img src={facebookLogo} />
                <img src={twitterLogo} />
                <img src={LinkedinLogo} />
            </div>
        </div>
    );
};

export default Footer;