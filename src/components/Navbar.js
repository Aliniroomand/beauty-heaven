import React from 'react';

//logo image
import Logo from "../assets/mainLogo.png"
//style
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <img src={Logo} alt='logo'/>
            <ul>
                <li>services</li>
                <li>barbers</li>
                <li>hairDressers\beauticians</li>
            </ul>
        </div>
    );
};

export default Navbar;