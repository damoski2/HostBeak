import React, { useState, useContext } from "react";
import styles from "../../styles/SignUp.module.css";
import { signUpImg } from "../../images";
import { useRouter } from 'next/router'
import { GlobalContext } from '../../context/GlobalContext'


const FormLayout = () => {

  const { handleChange, values } = useContext(GlobalContext)

  let router = useRouter();
  
  const { firstName, lastName, email, phone, password } = values

  const submit = (e)=>{
    e.preventDefault();

    router.push('/dashboard')
  }

  return (
    <form onSubmit={submit} className={styles.form} >
      <h1>Create Account</h1>
      <h3>Build an exceptional business</h3>
      <div className={styles.split__div}>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="Enter First name" name="firstName" onChange={handleChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Enter First name" name="lastName" onChange={handleChange} />
        </div>
      </div>
      <div className={styles.full__div}>
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" name="phone" onChange={handleChange} />
      </div>
      <div className={styles.full__div}>
          <label>Email Address</label>
          <input type="text" placeholder="Enter your email" name="email" onChange={handleChange} />
      </div>
      <div className={styles.full__div}>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
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
