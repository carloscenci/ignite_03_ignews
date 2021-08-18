import Head from 'next/head'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | IG.News</title>
      </Head>  
      <h1 className={styles.title}>
        Hello <span>World</span>
      </h1>
    </>
  )
}
