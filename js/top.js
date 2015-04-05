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
  React.createElement("h1", null, "第2回演奏会", React.createElement("br", null), 
"メンバーによるプロデュースシリーズ Vol.1", React.createElement("br", null), 
"君塚氏、愛を語る！　～弦楽が奏でる愛の物語"), 
  React.createElement("p", null, 
"2014年5月30日(土)　18:00", React.createElement("br", null), 
"横浜市神奈川区民文化センター　かなっくホール", React.createElement("br", null), 
"モーツァルト/歌劇「フィガロの結婚」序曲", React.createElement("br", null), 
"他", 
React.createElement("button", {className: "top-info-button mt-1em", onClick: this.onClick}, "チケットはこちら")
  )
)
)
		);
	}
});