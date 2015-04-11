ContactUs = React.createClass({
	render: function () {
		return (
<div className="body-wrap">
<Header />
<Ad />

<section className="content mt-30px">
  <h1><img src="images/contactus.png" /></h1>
  <hr />
  <address className="contact_us">
<h1>メールアドレス</h1>
<p className="ml-1em">glanz.strings＠gmail.com (@は半角に直して下さい)</p>
<h1 className="mt-1em">電話番号</h1>
<p className="ml-1em">080-3180-7125(岩本)</p>
  </address>
</section>

<Footer />
</div>
		);
	}
})