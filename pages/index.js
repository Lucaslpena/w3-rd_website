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
        </main>

        <Footer/>
      </div>
    )
  }
}
