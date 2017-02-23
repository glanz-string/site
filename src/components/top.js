import React from 'react'
import ConcertsStore from '../stores/ConcertsStore'
import Actions from '../actions/actions'
import Header from './header'
import Footer from './footer'
import Ad from './ad'
import Thumbnail from './thumbnail'
import { browserHistory } from 'react-router'
import CSSLoader from './css_loader'

export default class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = { concerts: ConcertsStore.getConcerts() }
  }
  onClick() {
    browserHistory.push("tickets",true)
  }
  componentWillMount() {
    Actions.receiveConcerts()
  }
  componentDidMount() {
    this._onload = () => {
      this.setState({ concerts: ConcertsStore.getConcerts() })
    }
    ConcertsStore.onChange(this._onload)
  }
  render() {
    console.log("index rendered");
    return(
      <div className="top-body-wrap">
      <Header />
      <Ad />
      <article className="top-info">
      <p>

      { this.state.concerts.length > 0 ? (() => {
          return (
            <Thumbnail src={ this.state.concerts[0]['image1'] } largeImageSrc="/images/concerts/3_1.jpg" style={{ width: "400px", height: "auto" }} />
          )
        })() : <div className="loading-top"><CSSLoader /></div>
      }
      <button className="top-info-button mt-1em" onClick={this.onClick}>チケットはこちら</button>
        </p>
      </article>
      </div>
    )
  }
}
