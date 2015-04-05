var Top = React.createClass({displayName: "Top",
	onClick: function () {
		Backbone.history.navigate("tickets",true);
	},
	render: function () {
		console.log("index rendered");
		return(
React.createElement("div", {className: "top-body-wrap"}, 
React.createElement(Header, null), 
React.createElement(Ad, null), 
React.createElement("article", {className: "top-info"}, 
React.createElement("p", null, 
React.createElement("img", {src: "/images/concerts/2_1.jpg", style: { width: "90%", height: "auto"}}), 
React.createElement("button", {className: "top-info-button mt-1em", onClick: this.onClick}, "チケットはこちら")
  )
)
)
		);
	}
});