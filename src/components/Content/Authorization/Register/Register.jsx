import React from 'react';
import styles from "./Register.module.css";

const Register = () => {
    return (
        <div className={styles.sign && styles.left}>
            <h1 className={styles.caption}>Sign up</h1>

            <input className={styles.input} type="text" name="username" placeholder="Username"/>
            <input className={styles.input} type="text" name="email" placeholder="E-mail"/>
            <input className={styles.input} type="password" name="password" placeholder="Password"/>
            <input className={styles.input} type="password" name="password2" placeholder="Retype password"/>

            <input className={styles.inputSubmit} type="submit" name="signup_submit" value="Sign me up"/>
        </div>
    );
};

export default Register;