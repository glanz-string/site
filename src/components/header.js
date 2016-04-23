import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1><Link to='/'><img src="images/title.png" alt="Glanz String Orchestra" /></Link></h1>
        <nav>
        <ul>
          <li><Link to='concerts'><img src="images/nav-concerts.png" /></Link></li>
          <li><Link to='aboutus'><img src="images/nav-aboutus.png" /></Link></li>
          <li><Link to='tickets'><img src="images/nav-tickets.png" /></Link></li>
          <li><Link to='contactus'><img src="images/nav-contactus.png" /></Link></li>
        </ul>
        </nav>
      </header>
          )
  }
}
