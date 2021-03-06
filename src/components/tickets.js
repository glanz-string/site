import React from 'react'
import Header from './header'
import Footer from './footer'
import Ad from './ad'
import MailForm from './mailform'

export default class Tickets extends React.Component {
  render() {
    // スクロール位置を一番上に戻す
    window.scrollTo(0,0);
    return (
      <div className="body-wrap">
      <Header />
      <Ad />

      <section className="content mt-30px">
        <h1><img src="images/tickets.png" /></h1>
        <hr />

        <article className="ticket-form">
          <address className="contact_us">
            <p className="mt-1em">前売り券：1000円<span className="ml-2em"></span>当日券：1500円</p>
            <p className="mt-1em">以下のフォームにお名前、電話番号、希望枚数等をご記入の上お申込みください。<br　/>
      チケット代は演奏会当日受付でお支払いください。
            </p>
            <MailForm />
      <p className="mt-1em">※送信後の確認メールの送信には時間が掛かる場合がございます。</p>
          </address>
        </article>
      </section>

      <Footer />
      </div>
    )
  }
}
