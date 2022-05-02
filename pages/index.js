import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Head>
        <title>Technical Quiz | Home</title>
        <meta name="keywords" content="quiz" />
      </Head>
      <div className={styles.homepageBody}>
        <div className={styles.homepageBody_Left}>
          <h1>Please select a Question!</h1>
        </div>
        <div className={styles.homepageBody_Right}>
          <Link href="/q1">
            <a>Question 1</a>
          </Link>
          <Link href="/q2">
            <a>Question 2</a>
          </Link>
          <Link href="/q3">
            <a>Question 3</a>
          </Link>
          <Link href="/q4">
            <a>Question 4</a>
          </Link>
          <Link href="/q7">
            <a>Question 7</a>
          </Link>
          <Link href="/q8">
            <a>Question 8</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
