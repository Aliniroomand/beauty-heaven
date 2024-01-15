import React, { useState,useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

//styles
import styles from"./BarberINF.module.css"

//components 
import ComingSoon2 from '../ComingSoon2';
import Commenting from '../../helper/Commenting';

//images
import BG from '../../assets/Men-images-services/BarbeDesk.png'
import VIPimg from '../../assets/VIP.png'

//context
import { BarbersContext } from '../../context/BarbersContextProvider';

//transition
import PagesTransition from '../../helper/PagesTransition';



const BarberINF = () => {
    const INFs=useContext(BarbersContext)

    const {id}=useParams();

    const [informations,setInformations]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //for what services they do ...
    
    const barberDetail=INFs.filter(barber=>barber.id === +id);
    const servicess=INFs[id]?.services;
    const VIP=barberDetail[0]?.VIP;
    const uniqueServices = Array.from(new Set(servicess));
    let shown_services = uniqueServices.join(`// `);

    //____________________________________

// handle what shown however every part is clicking 
const[actived,setActived]=useState({
    infos:false,
    clientEXP:false,
    reserve:false
})
    const activing = (e)=>{
        setActived({[e.target.id]:true});
    }
// ___________________________________

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
                <div className={styles.title_container}>
                        <ul>
                            <li  className={actived.infos ? styles.actived_part :  styles.deactived_part} id="infos" onClick={activing} >informations</li>
                            <li  className={actived.clientEXP ? styles.actived_part : styles.deactived_part } id="clientEXP" onClick={activing}>clients experience</li>
                            <li  className={actived.reserve ? styles.actived_part : styles.deactived_part } id='reserve' onClick={activing}>time reservation</li>
                        </ul>
                </div>

                    
                    <div className={styles.informations}>
                        {
                        (!actived.infos&& !actived.clientEXP && !actived.reserve)
                        ? <p className={styles.select_first}>Choose One!</p>
                        :
                        actived.infos?
                            <section  className={`${styles.personal_info} ${styles.slide_in}`}>
                                <h1>Who Is He/She?</h1>
                                    <p><span>Gender : </span> {gender}</p>
                                    <p><span>Email : </span> {email}</p>
                                    <p><span>Address : </span> {`${country},${state},${city},${street}`}</p>
                                    <p><span>Date Of Birth : </span> {date_of_birth}</p>
                                    <p><span>Services : </span> {shown_services}</p>
                            </section>
                            : 
                            actived.clientEXP?
                        <section className={`${styles.clientsExperiences_container} ${styles.slide_in}`}>
                            <Commenting id={id} />
                        </section>
                        : actived.reserve?
                        <section  className={`${styles.reservation} ${styles.slide_in}`}>
                            <ComingSoon2/>
                        </section>:
                        null
                        }
                    </div>
                    <div className={styles.imageContainer}>
                            { <section className={styles.VIP}>
                                {
                                (VIP) &&
                                <figure>
                                    <img src={VIPimg} alt="VIP"/>
                                    <figcaption>
                                        VIP
                                    </figcaption>
                                </figure>
                                }
                            </section> }
                            <img className={styles.profileIMG} src={profile_picture} alt='profile_picture'/>
                            <p><span>Name : </span> {first_name} {last_name} </p>
                    </div>

                </div>
            </>
            :<section className={styles.loadingPart}>
            <h1>LOADING</h1>
          </section>
          }

        </>
        </PagesTransition>

    );
};

export default BarberINF;
