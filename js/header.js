Header = React.createClass({displayName: "Header",
	render: function () {
		return (
React.createElement("header", null, 
  React.createElement("h1", null, React.createElement(A, {href: ""}, React.createElement("img", {src: "images/title.png", alt: "Glanz String Orchestra"}))), 
  React.createElement("nav", null, 
  React.createElement("ul", null, 
    React.createElement("li", null, React.createElement(A, {href: "concerts"}, React.createElement("img", {src: "images/nav-concerts.png"}))), 
    React.createElement("li", null, React.createElement(A, {href: "aboutus"}, React.createElement("img", {src: "images/nav-aboutus.png"}))), 
    React.createElement("li", null, React.createElement(A, {href: "tickets"}, React.createElement("img", {src: "images/nav-tickets.png"}))), 
    React.createElement("li", null, React.createElement(A, {href: "contactus"}, React.createElement("img", {src: "images/nav-contactus.png"})))
  )
  )
)
		)
	}
});