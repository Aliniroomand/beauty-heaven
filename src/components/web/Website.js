import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
//images
import github from '../../assets/socialMedias/github Logo.png'
import Linkedin from "../../assets/socialMedias/linkedin Logo.png" // corrected file path
import whatsapp from "../../assets/socialMedias/whatsApp logo.png" // corrected file path
import instagram from "../../assets/socialMedias/insta Logo.png" // corrected file path
import gmail from "../../assets/socialMedias/Gmail_logo.svg" // corrected file path
import MainBG from "../../assets/website/mainBG.jpg";
import rightCurtain from "../../assets/website/right-curtain.png";
import leftCurtain from "../../assets/website/left-curtain.png";
import middleCurtain from "../../assets/website/middle-curtain.png";
import menIcon from "../../assets/Men-images-services/barber.png";
import womenIcon from "../../assets/women-services/beautician.png";

// Assuming MailtoLink is a custom component, make sure it's defined/imported properly
// import MailtoLink from './MailtoLink'; // Import the MailtoLink component if it's defined in a separate file

const Website = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');

    elements.forEach((element) => {
      if (element.dataset.aosDelay) {
        if (isElementInViewport(element) && isViewportAtBottom()) {
          element.classList.add('aos-animate');
        } else {
          element.classList.remove('aos-animate');
        }
      } else {
        if (isElementInViewport(element)) {
          element.classList.add('aos-animate');
        } else {
          element.classList.remove('aos-animate');
        }
      }
    });

    AOS.refresh();
  };

  const isViewportAtBottom = () => {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  };

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.bottom === (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  return (
    <div className='relative top-0 '>
      <img className="fixed z-0 h-screen w-[99vw]" src={MainBG} alt='mainbg' />
      <div className='fixed z-10 top-0 left-0 w-full flex flex-row-reverse h-screen justify-between '>
        <img className=' sticky top-0 right-0 h-screen w-2/5' src={rightCurtain} alt='rightCurtain' />
        <img className=' sticky top-0 left-0 h-screen w-2/5' src={leftCurtain} alt='leftCurtain' />
      </div>
      <div className="relative top-0 w-screen h-screen ">
        <Link to="/menservices" data-aos='fade-right' className='flex justify-center items-center absolute top-0 h-[100vh] w-1/2 left-1/4 z-20'>
          <img className='h-full ' src={menIcon} alt='menIcon' />
          <figcaption className='absolute text-center bottom-1/3 text-4xl backdrop-blur-lg rounded-2xl px-3'>Men services</figcaption>
        </Link>
        <Link to="/womenservices" className='flex justify-center items-center absolute h-[100vh] w-1/2 left-1/4 top-[100vh] z-20' 
                data-aos='fade-left'>
          <img className='h-full ' src={womenIcon} alt='womenIcon' />
          <figcaption className='absolute bottom-1/3 text-4xl backdrop-blur-lg rounded-2xl text-center px-3'>Women services</figcaption>
        </Link>
        <div  className='absolute flex flex-row z-0 h-[100vh] top-[200vh] w-full '>
          <img  data-aos='fade-right' className='left-0 w-full z-0' src={middleCurtain} alt='middleCurtain' />
          <img  data-aos='fade-left' className='right-0 w-full' src={middleCurtain} alt='middleCurtain' />
          <h1 data-aos='zoom-in' className='absolute z-30 backdrop-blur-lg rounded-2xl text-center px-3 top-1/3 left-1/3 text-xl  text-yellow-300 w-1/3 '>
            Thanks for watching <br/>our connection ways:<br/>
            </h1>
        </div>

            <div data-aos='zoom-in' className='absolute flex justify-between z-50 top-[255vh] backdrop-blur-lg rounded-2xl p-1 w-1/3 right-1/3 left-1/3' >
                    <Link target='_blank' to="https://linkedin.com/in/ali-niroomand-b5b676246">
                        <img className="w-12"src={Linkedin} alt="LinkedinLogo"/>
                    </Link>
                    <Link  target='_blank' to="https://github.com/Aliniroomand">
                        <img className="w-12"src={github} alt="GithubLogo"/> 
                    </Link>
                    <Link target='_blank' to="https://instagram.com/ali_nd55?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                        <img className="w-12"src={instagram} alt="InstagramLogo"/> {/* Corrected alt text */}
                    </Link>
                    <Link target='_blank' to="https://wa.me/qr/MJKIWMVVAHCAI1">
                        <img className="w-12"src={whatsapp} alt="WhatsAppLogo"/> {/* Corrected alt text */}
                    </Link>

            </div>
        
      </div>
    </div>
  );
};

export default Website;
