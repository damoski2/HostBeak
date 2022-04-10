import React from 'react'
import { arrowLogoIcon, logo, notificationIcon, navbarArrowDownIcon, avatar } from '../../images'
import styles from '../../styles/Navbar.module.css';

const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <nav className={styles.navbar} style={{ zIndex: openMenu&& '150', position: openMenu&& 'relative' }} >
        <div className={styles.logo__div} >
            <img className={styles.logo} src={logo} alt="logo" />
            <p>HostBeak</p>
            <img className={styles.arrowLogoIcon} src={arrowLogoIcon} alt="arrowLogoIcon" />
        </div>

        <div className={styles.profile__div} >
            <div>
                <img src={notificationIcon} alt="notification Icon" />
            </div>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <p>Ogoluwa</p>
            <img className={styles.navbarArrowDownIcon} src={navbarArrowDownIcon} alt="navbarArrowDownIcon" />
        </div>

        <div className={styles.hambuger} onClick={()=>{
            setOpenMenu(!openMenu)
        }} >
          <div />
          <div />
          <div />
        </div>

    </nav>
  )
}

export default Navbar