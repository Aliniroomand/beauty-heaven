import React from 'react';
import styles from './BackButton.module.css'
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate=useNavigate()

   const addExitAnimation=(e)=>{
        navigate(-1)
        
   }
    return (
        <div>
    <button onClick={addExitAnimation} className={styles.return}>Return</button>
        </div>
    );
};

export default BackButton;