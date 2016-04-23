import React from 'react'
import ConcertsStore from '../stores/ConcertsStore'
import Actions from '../actions/actions'
import Header from './header'
import Footer from './footer'
import Ad from './ad'
import Thumbnail from './thumbnail'
import { browserHistory } from 'react-router'

export default class Concerts extends React.Component {
  constructor(props) {
    super(props)
    this.state = { concerts: ConcertsStore.getConcerts() }
  }
  onClick() {
    browserHistory.push("aboutus",true)
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
  componentWillUnmount() {
    ConcertsStore.off(this._onload)
  }
  render() {
    return(
      <div className="body-wrap">
      <Header />
      <Ad />
      <section className="content mt-30px">
        <h1><img src="images/concerts.png" /></h1>
        <hr />
        { this.state.concerts.length > 0 ? this.state.concerts.map((concert) => {
          var date = new Date(concert['date']);
          var now = new Date();
          return (
            <div>
              <article className="concert mt-10px">
                <div className="column2-left">
                  <p className="title mt-10px">{ concert['post_title'] }{ now.getTime() < date.getTime() ? '' : <span className='past ml-40px'>終了</span> }</p>
                  <p className="info mt-20px">
                  { date.getFullYear() }年{ date.getMonth()+1 }月{ date.getDate()}日　{concert['opening_time'] }開場　{ concert['start_time'] }開演<br />
                  { concert['place'] }<br />
                  <br />
                  <span dangerouslySetInnerHTML={{ __html: concert['post_content'].replace(/\n/g,'<br />') }} />
                  </p>
                  { now.getTime() < date.getTime() ? <button className="mt-2em ml-10px" onClick={this.onClick}>チケットはこちら</button> : '' }
                  
                </div>
                <div className="column2-right images">
                  { (concert['image1']) ?
                    <Thumbnail src={ concert['image1'] } largeImageSrc={ concert['image1'] } alt="パンフレット" />
                  : '' }
                  { (concert['image2']) ?
                    <Thumbnail src={ concert['image2'] } largeImageSrc={ concert['image2'] } alt="パンフレット" />
                  : '' }
                </div>
              </article>
              <hr />
            </div>
          )
          }) : <div className='loading'></div> 
        }

      </section>
      <Footer />
      </div>
    )
  }
}
