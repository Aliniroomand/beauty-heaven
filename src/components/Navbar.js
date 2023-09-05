import React from 'react';

//logo image
import Logo from "../assets/mainLogo.svg"

const Navbar = () => {
    return (
        <div>
            <img src={Logo} alt='logo'/>
            <ul>
                <li>services</li>
                <li>barbers</li>
                <li>hairDressers or beauticians</li>
            </ul>
        </div>
    );
};

export default Navbar;