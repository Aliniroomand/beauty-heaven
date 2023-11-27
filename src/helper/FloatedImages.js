import React from 'react';
// styles
import styles from './FloatedImages.module.css'

// images
import float1 from "../assets/floated images/float1.png"
import float2 from "../assets/floated images/float2.png"
import float3 from "../assets/floated images/float3.png"
import float4 from "../assets/floated images/float4.png"
import float5 from "../assets/floated images/float5.png"
import float6 from "../assets/floated images/float6.png"
import float7 from "../assets/floated images/float7.png"


const FloatedImages = () => {
    return (
        <div>
            <img className={styles.float1} src={float1} alt='float1'/>
            <img className={styles.float2} src={float2} alt='float2'/>
            <img className={styles.float3} src={float3} alt='float3'/>
            <img className={styles.float4} src={float4} alt='float4'/>
            <img className={styles.float5} src={float5} alt='float5'/>
            <img className={styles.float6} src={float6} alt='float6'/>
            <img className={styles.float7} src={float7} alt='float7'/>
        </div>
    );
};

export default FloatedImages;