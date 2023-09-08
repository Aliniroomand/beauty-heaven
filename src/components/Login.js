import React from 'react';
// import firebase from 'firebase/app';
// import { auth } from "../firebase";

// Icons 
import google from "../assets/google.svg";

// Styles
import styles from "./login.module.css";

const Login = () => {
    return (
        <div>
            <div className={styles.loginCard}>


                <div 
                    className={styles.button}
                    // onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <img src={google} alt="google" /> Sign in with Google
                </div>
            </div>
        </div>
    );
};

export default Login;