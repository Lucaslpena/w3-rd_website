import Head from 'next/head'
import Normalize from 'react-normalize'
import '../styles.scss'
import { Nav, Footer } from '../components'
import React, {Component } from 'react'

import dynamic from 'next/dynamic';

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      width: 100,
      height: 400
    };
  }

  componentDidMount() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  render() {
    const { width, height } = this.state;
    const sketch = require('../sketches/sketch').default(width, height);

    return (
      <div className="container">
        <Normalize/>
        <Head>
          <title>W3}RD — Futures Design Collective</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Nav/>
        <main>
          <P5Wrapper className={'background-sketch'} sketch={sketch} />
          <div className={'title'}>
            W33333333}RD
          </div>
          <div className={'oval'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
              <defs>
                <radialGradient id="a" cx="50%" cy="0%" r="100%" fx="50%" fy="0%">
                  <stop offset="0%" stopColor="#7078E5"/>
                  <stop offset="100%" stopColor="#D2A4CD"/>
                </radialGradient>
              </defs>
              <circle cx="187" cy="867" r="160" fill="url(#a)" fillRule="evenodd" transform="translate(-27 -707)"/>
            </svg>
          </div>
        </main>

        <Footer/>
      </div>
    )
  }
}
