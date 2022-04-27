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
      </div>
    </>
  )
}
