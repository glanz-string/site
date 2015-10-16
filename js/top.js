"use strict";

var Top = React.createClass({
	displayName: "Top",

	onClick: function onClick() {
		Backbone.history.navigate("tickets", true);
	},
	render: function render() {
		console.log("index rendered");
		return React.createElement(
			"div",
			{ className: "top-body-wrap" },
			React.createElement(Header, null),
			React.createElement(Ad, null),
			React.createElement(
				"article",
				{ className: "top-info" },
				React.createElement(
					"p",
					null,
					React.createElement(Thumbnail, { src: "/images/concerts/2_1small.jpg", largeImageSrc: "/images/concerts/2_1.jpg", style: { width: "400px", height: "auto" } }),
					React.createElement(
						"button",
						{ className: "top-info-button mt-1em", onClick: this.onClick },
						"チケットはこちら"
					)
				)
			)
		);
	}
});