import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';

//images
import Logo from "../assets/mainLogo.png"
import menLogo from "../assets/Men-images-services/men logo.png"
import barbersLogo from "../assets/Men-images-services/barbers logo.png"
import womenLogo from "../assets/women-services/women logo.png"
import beauticianLogo from "../assets/women-services/beautician logo.png"
import web from "../assets/website logo.png"
import userPanel from "../assets/user panel Logo.png"
import home from "../assets/home.png"
import back from "../assets/return logo.png"

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
                    <Link to="./">
                        <img src={home} alt='home'/>
                        <h6>home</h6>
                    </Link>
                    <Link to="./menservices">
                        <img src={menLogo} alt='menlogo'/>
                        <h6>men services</h6>
                    </Link>
                    <Link to="./womenservices">
                        <img src={womenLogo} alt='womenlogo'/>
                        <h6>women services</h6>
                    </Link>
                    <Link to="/Website" >
                        <img src={web} alt='web'/>
                        <h6>main website</h6>
                    </Link>
                    <Link to="./menservices">
                        <img src={barbersLogo} alt='womenlogo'/>
                        <h6>barbers list</h6>
                    </Link>
                    <Link to="./womenservices" >
                        <img src={beauticianLogo} alt='beauticianLogo'/>
                        <h6>beaticians List</h6>
                    </Link>
                    <Link to="./UserPanel" >
                        <img src={userPanel} alt='userPanel'/>
                        <h6>User panel</h6>
                    </Link>
                </ul>
            <div>
        <button onClick={addExitAnimation} className={styles.return}>
            <img src={back} alt='return logo'/>
        </button>
            </div>
        </div>
    </PagesTransition>
    );
};

export default Navbar;