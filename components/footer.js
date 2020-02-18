import React, {Component } from 'react'
import Link from 'next/link'
import './footer.scss'

export default class Footer extends Component {

  render(){
    return(
      <footer>

        <h1>W3}RD</h1>
        <Link href={'mailto:w3r@weird.fyi'} prefetch={false}>
          <a target={'_blank'}>
            <p>w3r@weird.fyi</p>
          </a>
        </Link>
      </footer>
    )
  }
}