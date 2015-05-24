ContactUs = React.createClass({displayName: "ContactUs",
	render: function () {
		return (
React.createElement("div", {className: "body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 

React.createElement("section", {className: "content mt-30px"}, 
  React.createElement("h1", null, React.createElement("img", {src: "images/contactus.png"})), 
  React.createElement("hr", null), 
  React.createElement("address", {className: "contact_us"}, 
React.createElement("h1", null, "メールアドレス"), 
React.createElement("p", {className: "ml-1em"}, "glanz.strings＠gmail.com (@は半角に直して下さい)"), 
React.createElement("h1", {className: "mt-1em"}, "電話番号"), 
React.createElement("p", {className: "ml-1em"}, "080-3180-7125(岩本)")
  )
), 

React.createElement(Footer, null)
)
		);
	}
})