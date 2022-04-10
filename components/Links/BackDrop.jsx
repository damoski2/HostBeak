import React from 'react'
import styles from '../../styles/Links.module.css'

const BackDrop = ({ openMenu, setOpenMenu }) => {
  return (
    <div className={styles.backdrop} onClick={()=> setOpenMenu(!openMenu) } style={{ display: openMenu? 'block':'none' }} ></div>
  )
}

export default BackDrop