import React, {Component } from 'react'
import PropTypes from 'prop-types'
import './nav.scss'

const top_links = [
  { href: '/about', label: 'about us' },
  { href: '/', label: 'futures design collective' },
  { href: 'https://www.instagram.com/weird.fyi/', label: 'instagram' },

].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}));


export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
    isTop: PropTypes.bool
  };

  static defaultProps = {
    isTop: true
  };


  render(){
    const { isTop } = this.props;
    return(
      <nav>
        {isTop ?
            top_links.map(({key, href, label}) => (
              <div key={key}>
                <a href={href}>{label}</a>
              </div>
            ))
          :
          <h1>bottom</h1>
        }
      </nav>
    )
  }

}

