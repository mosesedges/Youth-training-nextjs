import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Edgegrapy ||&nbsp;Home</title>
      <meta name='keyword' content='photography'/>
    </Head>
    <div className={styles.container}>
      <h1>Homepage</h1>
    </div>
    </>
    
  )
}
