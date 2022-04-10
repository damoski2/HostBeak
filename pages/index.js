import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SignUp } from '../components/import'

export default function Home() {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  )
}
