import React, { useState,useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

//styles
import styles from"./BarberINF.module.css"

//images
import BG from '../../assets/Men-images-services/BarbeDesk.png'
import VIPimg from '../../assets/VIP.png'
//context
import { BarbersContext } from '../../context/BarbersContextProvider';
import BackButton from '../../helper/BackButton';

//transition
import PagesTransition from '../../helper/PagesTransition';



const BarberINF = () => {
    const INFs=useContext(BarbersContext)

    const {id}=useParams();

    const [informations,setInformations]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //for what services they do ...
    
    const barberDetail=INFs.filter(barber=>barber.id === +id);
    const services=barberDetail[0].services;
    const VIP=barberDetail[0].VIP;
    const uniqueServices = Array.from(new Set(services));
    let shown_services = uniqueServices.join(`// `);


    //____________________________________


    useEffect(() => {
        const fetchData= async()=> {
            setIsLoading(true)
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/users/${id}`);
            setInformations(response.data.user);
            setIsLoading(false);
        }
        fetchData();
    }, [id]);
    const {date_of_birth,state,country,city,street,email,first_name,last_name,gender,profile_picture}=informations;
    return (
        <PagesTransition>
        <>
        <img className={styles.mainBG} src={BG} alt='BG'/>
            {!isLoading ? 
            <>
                <div className={styles.container}>
                    <div className={styles.informations}>
                        <div className={styles.imageContainer}>
                            <div className={styles.VIP}>
                                {
                                (VIP) &&
                                <figure>
                                    <img src={VIPimg} alt="VIP"/>
                                    <figcaption>
                                        VIP
                                    </figcaption>
                                </figure>
                                }
                            </div>
                            <img className={styles.profileIMG} src={profile_picture} alt='profile_picture'/>
                            <p><span>Name : </span> {first_name} {last_name} </p>
                        </div>
                        <div className={styles.textContainer}>
                            <section className={styles.personal_info}>
                                <h1>Who Is He/She?</h1>
                                    <p><span>Gender : </span> {gender}</p>
                                    <p><span>Email : </span> {email}</p>
                                    <p><span>Address : </span> {`${country},${state},${city},${street}`}</p>
                                    <p><span>Date Of Birth : </span> {date_of_birth}</p>
                                    <p><span>Services : </span> {shown_services}</p>
                            </section>
                        <Link to={"/menservices"}><button>back</button></Link>
                        <Link><button>reserve Time</button></Link>
                        </div>
                    </div>
                    <div className={styles.reservation}>
                        <h1>time reservation</h1>
                    </div>
                </div>
            </>:

            <div className={styles.loadingPart}>
            <h1>LOADING</h1>
          </div>
          }
          <BackButton/>

        </>
        </PagesTransition>

    );
};

export default BarberINF;
