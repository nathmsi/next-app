import Head from 'next/head'
import Image from 'next/image'
import HeaderComponent from '../src/components/Header'
import styles from '../styles/Home.module.css';

import HomeScreen from '../src/components/Home';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderComponent />
      <HomeScreen />
    </div>
  )
}
