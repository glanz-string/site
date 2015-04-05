AboutUs = React.createClass({displayName: "AboutUs",
	render: function () {
		return (
React.createElement("div", {className: "body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 
React.createElement("section", {className: "content mt-30px"}, 
  React.createElement("h1", null, React.createElement("img", {src: "images/glanz.png"})), 
  React.createElement("hr", null), 
  React.createElement("article", null)
), 

React.createElement(Footer, null)
)
		);
	}
})