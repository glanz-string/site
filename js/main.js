var sendmail = new SendMail({
	hostUrl: "/php/sendmail.php",
	subject: "チケット申し込み　from glanz.s602.xrea.com"
});

console.log(sendmail)

React.render(
React.createElement(Router, {root: ""}, 
	React.createElement(Content, {path: "", reactClass: "Top"}), 
	React.createElement(Content, {path: "aboutus", reactClass: "AboutUs"}), 
	React.createElement(Content, {path: "concerts", reactClass: "Concerts"}), 
	React.createElement(Content, {path: "tickets", reactClass: "Tickets"}), 
	React.createElement(Content, {path: "contactus", reactClass: "ContactUs"}), 
	React.createElement(Content, {path: "test", reactClass: "Test"})
)
, document.body );


//  <Router (pushState={true/false}) (root="Root path") (hashChange={true/false}) >
// 		<Content path="path" reactClass="React class name" />
//  		.
//  		.
//  		.
//  </Router>