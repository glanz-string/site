import React from 'react'
import Header from './header'
import Footer from './footer'
import Ad from './ad'

export default class AboutUs extends React.Component {
  render() {
    return (
<div className="body-wrap">
<Header />
<Ad />
<section className="content mt-30px">
  <h1><img src="images/glanz.png" /></h1>
  <hr />
  <article className="aboutus mt-10px">
    <div className="column2-left">
      <img src="images/playing.png" />
    </div>
    <div className="column2-right">
      <p className="text ml-10px">阪本正彦氏を中心にプロ奏者からアマチュア奏者、学生など様々なメンバーが集まって創立された弦楽合奏団です。<br />
既存の弦楽合奏の形にとらわれず、聴きにきてくださる方が再度聴きたくなるような独自性のある演奏会を目指しています。熱い演奏を、そして楽しい演奏会を、是非聴きにいらして下さい。
      </p>
    </div>
  </article>
</section>

<Footer />
</div>
    )
  }
}
