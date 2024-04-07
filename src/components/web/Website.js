import React from 'react';
// Import your image file
import MainBG from "../../assets/website/mainBG.jpg";
import rightCurtain from "../../assets/website/right-curtain.png";
import leftCurtain from "../../assets/website/left-curtain.png";
import middleCurtain from "../../assets/website/middle-curtain.png";

const Website = () => {
    return (
        <div className="fixed top-0 w-screen h-screen" style={{ backgroundImage: `url(${MainBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* parallax container  */}
        <section className='relative w-full h-full'>
            <img className="absolute right-0 w-1/2 h-full z-40" src={rightCurtain} alt='rightCurtain'/>
            <img className="absolute left-0 w-1/2 h-full z-40" src={leftCurtain} alt='leftCurtain'/>
            <img className="absolute left-0 w-1/2 h-full z-30"src={middleCurtain} alt='middleCurtain'/>
            <img className="absolute right-0 w-1/2 h-full z-30" src={middleCurtain} alt='middleCurtain'/>
        </section>
        {/* parallax container  */}
        </div>
    );
};

export default Website;
