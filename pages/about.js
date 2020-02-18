import Head from 'next/head'
import Normalize from 'react-normalize'
import { Nav, Footer } from '../components'
import {Component, Fragment} from 'react'
import Link from 'next/link'

import '../styles.scss'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [{
        name: 'Gábor László Mándoki',
        title: 'Multimedia Communication',
        name_leet: '6áb0r lászl0 mánd0k1',
        title_leet: 'mul71m3d14 c0mmun1c4710n',
        link: 'http://gabormandoki.com/',
        hover: false
      },{
        name: 'Lucas Lorenzo Pena',
        title: 'Creative & Social Technologist',
        name_leet: 'luc45 l0r3nz0 p3ña',
        title_leet: 'cr3471v3 & s0c14l t3chn0l06157',
        link: 'http://lucaslorenzopena.com/',
        hover: false
      },{
        name:   'Rutvij Pathak',
        title:  'Hardware Engineer',
        name_leet:  'ru7v1j p47h4k',
        title_leet: 'h4rdw4r3 3n61n33r',
        link: 'http://rutvijp.gitub.io/',
        hover: false
      },{
        name:   'Sophie Röcken',
        title:  'Project Manager & Communication',
        name_leet:  '50ph13 röck3n',
        title_leet: 'pr0j3c7 m4n463r & c0mmun1c4710n',
        link: 'http://www.sophieroecken.com/',
        hover: false
      },{
        name:   'Veronica Tran',
        title:  'Visual Designer',
        name_leet:  'v3r0n1c4 7r4n',
        title_leet: 'v15u4l d3516n3r',
        link: 'https://nveronicatran.com/',
        hover: false
      },{
        name:   'Katherine S Vegas G',
        title:  'Experience Designer',
        name_leet:  'k47h3r1n3 5 v3645 6',
        title_leet: '3xp3r13nc3 d3516n3r',
        link: 'https://katherinevegas.gitlab.io/',
        hover: false
      },{
        name:   'Oliver Juggins',
        title:  'Designer',
        name_leet:  '0l1v3r ju661n5',
        title_leet: 'd3516n3r',
        link: '/about',
        hover: false
      },{
        name:   'Sebastian Narvaez',
        title:  'Designer',
        name_leet:  '53b45714n n4rv43z',
        title_leet: 'd3516n3r',
        link: '/about',
        hover: false
      },{
        name:   'Svenja Pieritz',
        title:  'Cognitive Researcher',
        name_leet:  '5v3nj4 p13r17z',
        title_leet: 'c06n171v3 r3534rch3r',
        link: '/about',
        hover: false
      }
      ]
    }
  }

  generateTeam = () => {
    const { team } = this.state;
    let rendered = [];
    team.forEach((t,i) => {
      rendered.push(
        <div key={t.name}
             className={'team-member'}
             onMouseEnter={() => {
               let edited_team = JSON.parse(JSON.stringify(team));
               t.hover = true;
               edited_team[i] = t;
               this.setState({team: edited_team});
             }}
             onMouseLeave={() => {
               let edited_team = JSON.parse(JSON.stringify(team));
               t.hover = false;
               edited_team[i] = t;
               this.setState({team: edited_team});
             }}
        >
          <Link href={t.link} prefetch={false}>
            <a target={"_blank"}>
              <Fragment>
                <p>{!t.hover ? t.name : t.name_leet }</p>
                <p>{!t.hover ? t.title : t.title_leet }</p>
              </Fragment>
            </a>
          </Link>
        </div>
      )
    })
    return (rendered)
  }

  render() {
    return (
      <div className="container">
        <Normalize/>
        <Head>
          <title>W3}RD — Futures Design Collective</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Nav/>
        <main>
          <div className={'About'}>
            <div className={'story'}>
              <p>w3 r w3}rd</p>
              <br/>
              <p>We do research, development. <br /> We obsess over emergent narratives, interactive installations, and digital experiences.</p>
            </div>
            <div className={'team'}>
              <h2>Meet Weird</h2>
              <div className={'team-wrapper'}>
                { this.generateTeam()}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default About

