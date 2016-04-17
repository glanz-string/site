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
React.createElement(Thumbnail, {src: "/images/concerts/3_1small.jpg", largeImageSrc: "/images/concerts/3_1.jpg", style: { width: "400px", height: "auto"}}), 
React.createElement("button", {className: "top-info-button mt-1em", onClick: this.onClick}, "チケットはこちら")
  )
)
)
		);
	}
});
