import React from "react";
import styles from "../../styles/SignUp.module.css";
import { signUpImg } from "../../images";

const FormLayout = () => {
  return (
    <form className={styles.form} >
      <h1>Create Account</h1>
      <h3>Build an exceptional business</h3>
      <div className={styles.split__div}>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="Enter First name" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Enter First name" />
        </div>
      </div>
      <div className={styles.full__div}>
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" />
      </div>
      <div className={styles.full__div}>
          <label>Email Address</label>
          <input type="text" placeholder="Enter your email" />
      </div>
      <div className={styles.full__div}>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
      </div>
      <div className={styles.split__div2} >
        <div className={styles.checkbox__div}>
            <input type="checkbox" />
            <label className={styles.remember__label} >Remember me</label>
        </div>

        <span>Forgot Password?</span>
      </div>
      <button type="submit" >
        Sign Up
      </button>
      <div className={styles.extra__acct} >
        <div />
        <p>Got an Account? &nbsp;<span>Sign In</span></p>
        <div />
      </div>
    </form>
  );
};

export default FormLayout;
