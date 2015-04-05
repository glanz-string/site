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
  React.createElement("h1", null, "第2回演奏会"), 
  React.createElement("p", null, 
"2014年5月31日(土)　17:30開場　18:00開演", React.createElement("br", null), 
"横浜市緑区民文化センター", React.createElement("br", null), 
"モーツァルト/交響曲第41番\"ジュピター\"" + ' ' +
"他", 
React.createElement("button", {className: "top-info-button mt-1em", onClick: this.onClick}, "チケットはこちら")
  )
)
)
		);
	}
});