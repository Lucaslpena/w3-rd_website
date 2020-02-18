import Head from 'next/head'
import Normalize from 'react-normalize'
import '../styles.scss'
import { Nav, Footer } from '../components'

const Home = () => {
  return(
    <div className="container">
      <Normalize />
      <Head>
        <title>W3}RD — Futures Design Collective</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Nav/>
      <main>

      </main>

      <Footer />
    </div>
  )
}

export default Home
