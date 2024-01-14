import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';

//logo image
import Logo from "../assets/mainLogo.png"
//style
import styles from "./Navbar.module.css"
//transition
import PagesTransition from '../helper/PagesTransition';

const Navbar = () => {
    const navigate=useNavigate()
    const addExitAnimation=()=>{
        navigate(-1)
   }

let[active,setActive]=useState(false)
const showElements = ()=>{
        setActive(!active);
}
    return (
<PagesTransition>
        <div className={styles.container}>
                <img onClick={showElements} className={!active ? styles.logo : styles.ClickedLogo} src={Logo} alt='logo' />         
                <ul  className={`${styles.navItems} ${!active ? styles.roll_out: styles.roll_in}`}>
                    <Link to="./menservices">Men services</Link>
                    <li>barbers</li>
                    <li>hairDressers\beauticians</li>
                    
                </ul>
            <div>
        <button onClick={addExitAnimation} className={styles.return}>Return</button>
            </div>
        </div>
    </PagesTransition>
    );
};

export default Navbar;