import React from 'react';
import styles from './BackButton.module.css'
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate=useNavigate()
    return (
        <div>
    <button onClick={()=>navigate(-1)} className={styles.return}>Return</button>
        </div>
    );
};

export default BackButton;