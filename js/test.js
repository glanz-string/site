Test = React.createClass({displayName: "Test",
	render: function () {
		return (
React.createElement("div", {className: "body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 

React.createElement("section", {className: "content mt-30px"}, 
React.createElement(MailForm, {model: sendmail})
), 

React.createElement(Footer, null)
)
		);
	}
})