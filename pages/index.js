import Head from 'next/head'
import { useState } from 'react'
import { Button, Segment } from 'semantic-ui-react'
import styles from '../styles/Home.module.css'
import Question1 from '../pages/q1'
import Question2 from '../pages/q2'
import Question3 from '../pages/q3'
import Question4 from '../pages/q4'
import Question7 from '../pages/q7'
import Question8 from '../pages/q8'

export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState('q1')
  return (

    <div className={styles.homeWrapper}>
      <Head>
        <title>Technical Quiz | Home</title>
        <meta name="keywords" content="quiz" />
      </Head>
      <div className={styles.homepageBody}>
        <div className={styles.homepageBody_Top}>
          <h1 className={styles.homepageHeader}>Please select a Question!</h1>
        </div>
        <Segment>
          <div className={styles.homepageBody_Main}>
            {
              activeQuestion === 'q1' &&
              <Question1 />
            }
            {
              activeQuestion === 'q2' &&
              <Question2 />
            }
            {
              activeQuestion === 'q3' &&
              <Question3 />
            }
            {
              activeQuestion === 'q4' &&
              <Question4 />
            }
            {
              activeQuestion === 'q7' &&
              <Question7 />
            }
            {
              activeQuestion === 'q8' &&
              <Question8 />
            }
          </div>
        </Segment>
        <div className={styles.homepageBody_Bottom}>
          <Button primary onClick={() => setActiveQuestion('q1')}>Question 1</Button>
          <Button primary onClick={() => setActiveQuestion('q2')}>Question 2</Button>
          <Button primary onClick={() => setActiveQuestion('q3')}>Question 3</Button>
          <Button primary onClick={() => setActiveQuestion('q4')}>Question 4</Button>
          <Button primary onClick={() => setActiveQuestion('q7')}>Question 7</Button>
          <Button primary onClick={() => setActiveQuestion('q8')}>Question 8</Button>
        </div>
      </div>
    </div>
  )
}
