import React from 'react';
//images
import typing from '../assets/loading/typing.gif'
//styles
import styles from './ComingSoon2.module.css'
//contexts
import PagesTransition from '../helper/PagesTransition';
const ComingSoon = () => {
    return (
    <PagesTransition>
    <>
        <div className={styles.container}>
            <h1>Coming soon ...</h1>
            <h3>I'm Working on It ...</h3>
            <img src={typing} alt='typing'/>
        </div>
    </>
    </PagesTransition>
    );
};

export default ComingSoon;