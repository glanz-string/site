import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Top from './components/top'
import Concerts from './components/concerts'
import AboutUs from './components/aboutus'
import Tickets from './components/tickets'
import ContactUs from './components/contactus'

//var ticketMail = new SendMail({
//	hostUrl: "/php/sendmail.php",
//	subject: "Tickets　from glanz.s602.xrea.com"
//});
//
//var concerts = new ConcertsCollection({});
//


ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={Top} />
  <Route path="concerts" component={Concerts} />
  <Route path="aboutus" component={AboutUs} />
  <Route path="tickets" component={Tickets} />
  <Route path="contactus" component={ContactUs} />
</Router>
,document.getElementById('app'))


//<Router root="">
//  <Content path="" reactClass={Top} />
//  <Content path="aboutus" reactClass={AboutUs} />
//  <Content path="concerts" reactClass={Concerts} />
//  <Content path="concerts/:id(/)" reactClass={Concerts} />
//  <Content path="tickets" reactClass={Tickets} />
//  <Content path="contactus" reactClass={ContactUs} />
//</Router>
