import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Technical Quiz | Home</title>
        <meta name="keywords" content="quiz" />
      </Head>
      <div>
        <h1>Homepage</h1>
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
      </div>
    </>
  )
}
