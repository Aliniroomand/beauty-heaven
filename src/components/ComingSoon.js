import React from 'react';
//images
import typing from '../assets/loading/typing.gif'
import BG from '../assets/BG2.jpg'
//styles
import styles from './ComingSoon.module.css'
//contexts
import BackButton from '../helper/BackButton';
import PagesTransition from '../helper/PagesTransition';
const ComingSoon = () => {
    return (
    <PagesTransition>
    <>
        <img className={styles.BG} src={BG} alt='BG' />

        <div className={styles.container}>
            <h1>Coming soon ...</h1>
            <h3>I'm Working on It ...</h3>
            <img src={typing} alt='typing'/>
        </div>
        <BackButton />
    </>
    </PagesTransition>
    );
};

export default ComingSoon;