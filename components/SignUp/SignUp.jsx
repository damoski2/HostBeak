import React from 'react'
import styles from '../../styles/SignUp.module.css'
import { signUpImg } from '../../images'
import LeftLayout from './LeftLayout'
import FormLayout from './FormLayout'

const SignUp = () => {
  return (
    <main className={styles.cnt} >
        <LeftLayout />
        <FormLayout />
    </main>
  )
}

export default SignUp