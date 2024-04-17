import React from 'react';

// Import your image file
import MainBG from "../../assets/website/mainBG.jpg";
import rightCurtain from "../../assets/website/right-curtain.png";
import leftCurtain from "../../assets/website/left-curtain.png";
import middleCurtain from "../../assets/website/middle-curtain.png";
import menIcon from "../../assets/Men-images-services/barber.png"
import womenIcon from "../../assets/women-services/beautician.png"

const Website = () => {

    return (
        <div className='relative top-0'>
            <img className="fixed z-0 h-screen w-[99vw]"src={MainBG} alt='mainbg'/>
            <div className='fixed z-30 top-0 left-0 w-full flex flex-row-reverse h-screen justify-between '> 
                    <img className=' sticky top-0 right-0 h-screen w-2/5' src={rightCurtain} alt='rightCurtain'/>
                    <img className=' sticky top-0 left-0 h-screen w-2/5' src={leftCurtain} alt='leftCurtain'/>
            </div>
            <div className="relative top-0 w-screen h-screen  ">
                    <figure className='flex justify-center items-center absolute top-0 h-[100vh] w-1/2 left-1/4'>
                            <img className='h-full ' src={menIcon} alt='menIcon' />
                            <figcaption className='absolute text-center bottom-1/3 text-4xl backdrop-blur-lg rounded-2xl px-3'>Men services</figcaption>
                    </figure>
                    <figure className='flex justify-center items-center absolute h-[100vh] w-1/2 left-1/4 top-[100vh]'>
                            <img className='h-full ' src={womenIcon} alt='womenIcon' />
                            <figcaption className='absolute bottom-1/3 text-4xl backdrop-blur-lg rounded-2xl text-center px-3'>Women services</figcaption>
                    </figure>
                <div className='absolute flex flex-row z-0 h-[100vh] top-[200vh] w-full'>
                            <img className='left-0 w-1/2'src={middleCurtain} alt='middleCurtain' />
                            <img className='right-0 w-1/2'src={middleCurtain} alt='middleCurtain' />
                </div>
            </div>
        </div>
    );
};

export default Website;
