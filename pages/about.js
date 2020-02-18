import Head from 'next/head'
import Normalize from 'react-normalize';
import '../styles.scss'
import Home from "./index";

const About = () => {
  return(
    <div className="container">
      <Normalize />
      <Head>
        <title>W3}RD — Futures Design Collective</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <h2>aboutpage</h2>
      </main>
    </div>
  )
}

export default About

