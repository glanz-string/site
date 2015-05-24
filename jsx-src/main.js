var ticketMail = new SendMail({
	hostUrl: "/php/sendmail.php",
	subject: "Tickets　from glanz.s602.xrea.com"
});

React.render(
<Router root="">
	<Content path="" reactClass={Top} />
	<Content path="aboutus" reactClass={AboutUs} />
	<Content path="concerts" reactClass={Concerts} />
	<Content path="concerts/:id(/)" reactClass={Concerts} />
	<Content path="tickets" reactClass={Tickets} />
	<Content path="contactus" reactClass={ContactUs} />
</Router>
, document.body );


//  <Router (pushState={true/false}) (root="Root path") (hashChange={true/false}) >
// 		<Content path="path" reactClass="React class name" />
//  		.
//  		.
//  		.
//  </Router>
