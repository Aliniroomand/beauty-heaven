import React from 'react';
import { Link } from 'react-router-dom';

//logo image
import Logo from "../assets/mainLogo.png"
//style
import styles from "./Navbar.module.css"
//transition
import PagesTransition from '../helper/PagesTransition';

const Navbar = () => {

    return (
<PagesTransition>
        <div className={styles.container}>
            <Link to="/">
            <img src={Logo} alt='logo' />
            </Link>
                
            <ul>
                <li>services</li>
                <li>barbers</li>
                <li>hairDressers\beauticians</li>
                
            </ul>
        </div>
    </PagesTransition>
    );
};

export default Navbar;