import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/banner'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium 3.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />
      
    </div>
  )
}

export default Home
