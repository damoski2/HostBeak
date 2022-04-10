import React from "react";
import styles from "../../styles/SignUp.module.css";
import { signUpImg } from "../../images";

const LeftLayout = () => {
  return (
    <section style={{ backgroundImage: `url(${signUpImg})` }} className={styles.img__section} >
      <h3>
        Building exceptional services with Back Office Support and Business
        Perfomance
      </h3>
    </section>
  );
};

export default LeftLayout;
